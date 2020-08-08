import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './style';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorete() {
        AsyncStorage.getItem('favorites').then((res) => {
            if (res) {
                const favoritedTeachers = JSON.parse(res) as Teacher[];
                const favoritedTeachersIds = favoritedTeachers.map(
                    (teacher) => teacher.id
                );
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    function handleToggleFilterVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFilterSubmit() {
        loadFavorete();
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });
        setTeachers(res.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Profys disponíves"
                headerRight={
                    <BorderlessButton
                        onPress={handleToggleFilterVisible}
                        style={{ width: 60, alignItems: 'center' }}
                    >
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Qual a matéria"
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    value={week_day}
                                    onChangeText={(text) => setWeekDay(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton
                            style={styles.submitButton}
                            onPress={handleFilterSubmit}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default TeacherList;

import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function serachTeachers(e: FormEvent) {
        e.preventDefault();

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
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys desponives.">
                <form id="search-teachers" onSubmit={serachTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'biologia', label: 'biologia' },
                            {
                                value: 'Educação física',
                                label: 'Educação física',
                            },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geogradia', label: 'Geogradia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </main>
        </div>
    );
}

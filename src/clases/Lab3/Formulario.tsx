import React, { useState, useEffect } from 'react';
import { useFocus } from './useFocus';

interface FormData {
    matricula: string;
    nombre: string;
    apellidos: string;
    edad: string;
    universidad: string;
    carrera: string;
}

interface FormDisplay {
    matricula: string;
    nombre: string;
    apellidos: string;
    edad: string;
    universidad: string;
    carrera: string;
}

const initialForm: FormData = {
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: '',
};

export const Formulario: React.FC = () => {
    const [form, setForm] = useState<FormData>(initialForm);
    const [submitted, setSubmitted] = useState<FormDisplay | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { ref: matriculaRef, setFocus: focusMatricula } = useFocus();

    // useEffect: Al montar el componente, hace foco en el primer campo
    useEffect(() => {
        focusMatricula();
    }, []);

    // useEffect: Muestra animación al haber datos enviados
    useEffect(() => {
        if (submitted) {
            setIsVisible(false);
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted({ ...form });
    };

    const handleReset = () => {
        setForm(initialForm);
        setSubmitted(null);
        setIsVisible(false);
        setTimeout(() => focusMatricula(), 50);
    };

    const fields: { label: string; name: keyof FormData; type?: string }[] = [
        { label: 'Matrícula', name: 'matricula' },
        { label: 'Nombre', name: 'nombre' },
        { label: 'Apellidos', name: 'apellidos' },
        { label: 'Edad', name: 'edad', type: 'number' },
        { label: 'Universidad', name: 'universidad' },
        { label: 'Carrera', name: 'carrera' },
    ];

    return (
        <div className="page">
            <div className="container">

                {/* FORM PANEL */}
                <div className="panel form-panel">
                    <div className="panel-header">
                        <span className="panel-tag">Lab 3</span>
                        <h1 className="panel-title">Registro<br />Estudiantil</h1>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        {fields.map(({ label, name, type }, i) => (
                            <div className="field" key={name} style={{ animationDelay: `${i * 60}ms` }}>
                                <label htmlFor={name}>{label}</label>
                                <input
                                    ref={name === 'matricula' ? matriculaRef : undefined}
                                    id={name}
                                    name={name}
                                    type={type || 'text'}
                                    value={form[name]}
                                    onChange={handleChange}
                                    placeholder={`Ingresa tu ${label.toLowerCase()}`}
                                    required
                                />
                            </div>
                        ))}

                        <div className="btn-group">
                            <button type="submit" className="btn-submit">
                                Enviar
                            </button>
                            <button type="button" className="btn-reset" onClick={handleReset}>
                                Limpiar
                            </button>
                        </div>
                    </form>
                </div>

                {/* DISPLAY PANEL */}
                <div className="panel display-panel">
                    <div className="panel-header">
                        <span className="panel-tag">Vista previa</span>
                        <h2 className="panel-title">Datos<br />Capturados</h2>
                    </div>

                    {submitted ? (
                        <div className={`result-card ${isVisible ? 'visible' : ''}`}>
                            {[
                                { label: 'Matrícula', value: submitted.matricula },
                                { label: 'Nombre', value: submitted.nombre },
                                { label: 'Apellidos', value: submitted.apellidos },
                                { label: 'Edad', value: submitted.edad },
                                { label: 'Universidad', value: submitted.universidad },
                                { label: 'Carrera', value: submitted.carrera },
                            ].map(({ label, value }) => (
                                <div className="result-row" key={label}>
                                    <span className="result-label">{label}</span>
                                    <p className="result-value">{value || '—'}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">✦</div>
                            <p>Completa el formulario<br />y presiona <strong>Enviar</strong></p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Formulario;

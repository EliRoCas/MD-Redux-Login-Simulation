import '../styles/Home.css';
import logob1 from '../assets/img/logob1.png';
import logoc1 from '../assets/img/logoc1.png';
import coctel2 from '../assets/img/coctel2.png';
import certificadoImg from '../assets/img/certificado.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="course-content">
                <div className="course-details">
                    <div className="course-info">
                        <header className="course-header">
                            <h1>Curso de Coctelería</h1>
                            <p>
                                En este curso de coctelería, aprenderás a aplicar procesos fundamentales para la preparación y creación de cócteles, 
                                equipándote con las habilidades necesarias para atender a clientes en diversos contextos. Desde la selección de ingredientes 
                                hasta técnicas de presentación, descubrirás cómo crear bebidas que satisfagan las expectativas de los consumidores en eventos 
                                y establecimientos.
                            </p>
                        </header>
                        <div className="course-stats">
                            <span>⭐ 4.8 opiniones</span>
                            <span> 👥 23.534 estudiantes</span>
                            <span> 💖 Curso gratis</span>
                        </div>
                    </div>
                </div>
                <div className="course-image">
                    <img src={coctel2} alt="Delicious cocktail in a glass" />
                </div>
            </div>
            <section className="benefits-section">
                <div className="benefit">
                    <h2 className="icon-text">
                        <img src={logob1} alt="Modalidad 100% virtual" className="icon" />
                        Modalidad 100% virtual
                    </h2>
                    <p>El contenido está disponible las 24 horas del día para que puedas estudiar en tu propio horario.</p>
                </div>
                <div className="benefit">
                    <h2 className="icon-text">
                        <img src={logoc1} alt="Certificación internacional" className="icon" />
                        Certificación internacional
                    </h2>
                    <p>Al finalizar el curso, obtén un certificado con validez internacional.</p>
                </div>
            </section>
            <section className="learning-section">
                <h2>¿Qué aprenderás?</h2>
                <ul className="learning-list">
                    <li>🥂 Preparación de cócteles clásicos y modernos.</li>
                    <li>🍸 Técnicas de mezcla y presentación.</li>
                    <li>🍹 Conocimiento de ingredientes y su selección.</li>
                    <li>🍷 Maridaje de bebidas y comidas.</li>
                    <li>🧊 Creación de recetas originales.</li>
                </ul>
            </section>
            <section className="certificate-section">
                <h2>Obtén tu Certificado</h2>
                <div className="certificate-content">
                    <div className="certificate-text">
                        <p>Puedes compartir tu Certificado en LinkedIn, en tu currículum impreso o en otros documentos.</p>
                        <p>Validez internacional: Evidencie su aprendizaje ante cualquier empleador o institución.</p>
                        <p>Tareas calificadas: Reciba calificaciones y observaciones de todas sus actividades resueltas.</p>
                        <p>Asistencia académica: Solicite asesoría sobre su proceso de certificación.</p>
                        <h3>Diplomado Profesional en Coctelería</h3>
                        <p>80 horas certificables</p>
                        <p>Al finalizar el Curso de coctelería, puedes obtener un certificado de estudios para evidenciar 
                            tus nuevos conocimientos y habilidades.</p>
                    </div>
                    <div className="certificate-image">
                        <img src={certificadoImg} alt="Certificado de estudios" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
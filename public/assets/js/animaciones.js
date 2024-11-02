document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.titulo');
    const texto = titulo.textContent;
    titulo.textContent = '';
    let i = 0;

    function escribirTitulo() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirTitulo, 100);
        }
    }

    escribirTitulo();
});


//skills
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const progressCircle = skill.querySelector('.progress-circle');
        const skillValue = skill.dataset.skill; // Obtener el valor de la habilidad
        const radius = progressCircle.r.baseVal.value; // Obtener el radio del círculo
        const circumference = 2 * Math.PI * radius; // Calcular la circunferencia

        // Establecer el valor inicial de la barra de progreso
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;

        // Simular el llenado de la barra
        setTimeout(() => {
            progressCircle.style.strokeDashoffset = circumference - (skillValue / 100 * circumference); // Cambiar el offset para la animación
        }, 100); // Retraso para que la animación sea visible
    });
});

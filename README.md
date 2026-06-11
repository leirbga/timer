# ⏳ Interactive Neon Timer

Una aplicación web moderna e interactiva para gestionar cuentas regresivas visuales. Cuenta con un diseño futurista basado en degradados vibrantes, efectos de luces neón, validación de datos en tiempo real mediante ventanas modales personalizadas y una experiencia inmersiva a pantalla completa.

## 🚀 Características

- **Diseño 100% Responsivo:** Adaptado perfectamente para su visualización en dispositivos móviles, tabletas y computadoras de escritorio.
- **Validación de Entradas:** Controla de forma estricta que el usuario ingrese un valor y restringe el tiempo a un máximo seguro de 60 segundos.
- **Modales Personalizados:** Sustituye los aburridos `alert()` nativos del navegador por ventanas emergentes estilizadas con difuminado de fondo (`backdrop-filter`).
- **Cuenta Regresiva de Alto Impacto:** Animación numérica gigante optimizada con fuentes fluidas (`vw`) y textos degradados.
- **Interfaz Limpia y Modular:** Código estructurado separando por completo el diseño (HTML), los estilos (CSS) y la lógica de comportamiento (JS).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del temporizador y sus capas modales.
* **CSS3:** Animaciones avanzadas, diseño elástico con Flexbox, variables de entorno y efectos visuales de desenfoque.
* **JavaScript (Vanilla):** Manipulación dinámica del DOM, control del flujo de tiempo y lógica de validación de usuario.

## 📦 Estructura del Proyecto

```text
├── index.html       # Estructura principal y contenedores modales
├── index.css        # Estilos visuales, adaptabilidad y animaciones
└── index.js         # Lógica de la cuenta regresiva y validaciones
```

## 🔄 Flujo de Funcionamiento

1. **Ingreso:** El usuario digita un número entero en el campo de texto central.
2. **Validación Dinámica:** Al presionar "Enviar", JavaScript intercepta el evento para verificar que el campo no esté vacío y que el rango se encuentre estrictamente entre 1 y 60 segundos.
3. **Control de Errores:** Si la regla falla, se inyectan clases de visibilidad (`.cajaVisible`) sobre los contenedores modales, bloqueando la pantalla y reseteando el formulario al presionar "Aceptar".
4. **Cuenta Regresiva:** Si el valor es correcto, se inicia un temporizador asíncrono en reversa con tipografía responsiva a pantalla completa.
5. **Clímax Animado:** Al expirar el tiempo (`0`), se limpia por completo el árbol del DOM (`document.body.innerHTML`) para renderizar de forma nativa la recreación del penal definitorio de Gonzalo Montiel en el Mundial de Qatar 2022 mediante puros fotogramas CSS (`@keyframes`).

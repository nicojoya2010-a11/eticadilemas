const cases = [
  {
    title: 'CASO 1 – Hospital',
    desc: `Un apagón deja al hospital con energía para un solo quirófano.
Tomás, un niño de 7 años, necesita una operación inmediata para sobrevivir.
Alexander también están en estado crítico tras ser apuñalado al ser asaltado.`,
    info: `Tomás tiene 7 años, tiene problemas cardiacos y su unica oportunidad de recibir un corazon es esta, su papá depende emocionalmente de el
Alexander tiene 35 años, tiene una hija, mariana de 16 años, su esposa murio hace seis años por lo que el es el unico sustento en casa
El hospital es rural y no tiene apoyo cercano.`,
    options: [
      { text: 'Operar a Tomás', consequence: 'Alexander muere, mariana entra en depresion y se quita la vida' },
      { text: 'Operar a alexander ', consequence: 'Tomás no sobrevive, su papá enloquece y termina sumergido en el alcohol y el trabajo' }
    ]
  },
  {
    title: 'CASO 2 – Corrupción Familiar',
    desc: `Encuentras documentos que prueban corrupción de un político admirado públicamente.
Tu madre está implicada directamente en el caso.`,
    info:`Tu madre trabaja en una entidad estatal desde hace 15 años.
El político tiene una imagen pública impecable y conexiones judiciales.`
,
    options: [
  { 
    text: 'Entregar las pruebas', 
    consequence: 'El caso se hace público. El político es investigado. Tu madre pierde su empleo y enfrenta un proceso legal. La relación entre ambos queda fracturada para siempre.' 
  },
  { 
    text: 'Destruir los archivos', 
    consequence: 'El político continúa en el poder. La corrupción se mantiene. Tu madre conserva su trabajo, pero tú cargas con la certeza de haber sido cómplice.' 
  }

]
  }
,
  {
    title: 'CASO 3 – El río negro',
    desc: `Una fábrica arroja desechos al río del pueblo.
El agua comienza a mostrar signos de contaminación.`,
    info: `La fábrica emplea al 60% del pueblo, incluida tu familia.
El río es la única fuente de agua potable para tres comunidades.
Las autoridades locales dependen económicamente de la empresa.
No existen leyes ambientales que obliguen a cerrarla.`, 
    options: [
  { 
    text: 'Cerrar la fábrica', 
    consequence: 'La contaminación se detiene. El río comienza a recuperarse. El pueblo entra en crisis económica y muchas familias, incluida la tuya, quedan sin sustento.' 
  },
  { 
    text: 'Mantenerla abierta', 
    consequence: 'La economía del pueblo se mantiene estable. Con el tiempo, el agua se vuelve inutilizable y las comunidades deben vivir con las consecuencias de la contaminación.' 
  }
]

  },
  {
    title: 'CASO 4 – Silencio mortal',
    desc: `Tu amigo, en estado de embriaguez, atropelló a una persona y huyó.
Tú estabas presente y sabes exactamente lo que ocurrió.`,
    info: `La víctima está en estado crítico.
Tu amigo nunca había tenido problemas con la ley.
No hay cámaras en la zona.
`, 
    options: [
  { 
    text: 'Declarar', 
    consequence: 'Tu amigo es arrestado. La familia de la víctima obtiene justicia. Tu relación con él se rompe para siempre' 
  },
  { 
    text: 'Callar', 
    consequence: 'La víctima muere días después por complicaciones internas. un testigo que estaba presente declara y eres arrestado por ser complice.' 
  }
]
  },
  {
    title: 'CASO 5 – Marketing',
    desc:`Descubres un fallo grave en una nueva batería para celulares.
El defecto puede provocar explosiones espontáneas.`,
    info: `La empresa ya invirtió millones en el producto.
Tú firmaste un contrato de confidencialidad.
El fallo no es evidente a simple vista.
Solo tú tienes la prueba técnica.`, 
    options: [
  { 
    text: 'Publicar la verdad', 
    consequence: 'El producto se retira del mercado. La empresa te despide y enfrenta pérdidas enormes. Te conviertes en un ejemplo de integridad profesional.' 
  },
  { 
    text: 'Ocultarlo', 
    consequence: 'El producto se lanza. Semanas después se reportan accidentes graves por sobrecalentamiento. La empresa te vuelve martir, lo que causa que te arresten por negligencia' 
  }
]


  },
  {
  title: 'CASO FINAL – El SITP',
  desc: `Estás en una parada de autobus, observas a Un hombre distraído caer a la carretera, el SITP se aproxima a demasiada velocidad.`,
  info: `El SITP no puede frenar a tiempo.
Hay tiempo para intervenir, pero solo lo podras empujar, siendo tu el que reciba todo el impacto.
Hay muy pocas posibilidades de que sobrevivas`,
  options: [
    { 
      text: 'Intervenir', 
      consequence: 'Logras empujarlo fuera de la carretera en el último segundo. El SITP termina arroyandote, logras sobrevivir pero terminas usando muletas para siempre, tu pierna derecha queda inutilizable' 
    },
    { 
      text: 'No intervenir', 
      consequence: 'El SITP impacta. El desconocido muere y tu cargas con la culpa de no haber hecho algo' 
    }
  ]
},
{
  title: 'CASO extra – El examen',
  desc: `Estás en un examen decisivo para graduarte.
Tu mejor amigo no estudió y te pide las respuestas.`,
  info: `Si repruebas, pierdes el año y tu oportunidad de beca.
El profesor es estricto con las sanciones.
Tu amigo depende de esta materia para no repetir curso.`,
  options: [
    { 
      text: 'Ayudarlo a copiar', 
      consequence: 'Ambos aprueban. Semanas después el profesor sospecha irregularidades. revisa las camaras y descubre la trampa, ambos son expulsados' 
    },
    { 
      text: 'Negarte', 
      consequence: 'Tu amigo reprueba. Se distancia de ti y te acusa de egoísta. Tú apruebas sabiendo que protegiste tu futuro, pero perdiste la relación.' 
    }
  ]
}



  
  // puedes seguir igual con los demás casos
];

let currentCase = 0;

function hideAll() {
  document.querySelectorAll('.leveling-container')
    .forEach(div => div.classList.add('hidden'));
}

function startGame() {
  hideAll();
  document.getElementById('game-screen').classList.remove('hidden');
  loadCase();
}

function loadCase() {
  const c = cases[currentCase];
  document.getElementById('case-title').innerText = c.title;
  document.getElementById('case-desc').innerText = c.desc;
  document.getElementById('btnA').innerText = c.options[0].text;
  document.getElementById('btnB').innerText = c.options[1].text;
  document.getElementById('btnA').onclick = () => handleDecision(0);
  document.getElementById('btnB').onclick = () => handleDecision(1);
}

function handleDecision(index) {
  const modal = document.getElementById('decision-modal');
  const modalText = document.getElementById('modal-text');
  modalText.innerText = cases[currentCase].options[index].consequence;
  modal.showModal();
}

function closeDecisionModal() {
  document.getElementById('decision-modal').close();
  currentCase++;
  if (currentCase < cases.length) loadCase();
  else showCalculation();
}

function showCalculation() {
  hideAll();
  document.getElementById('loading-screen').classList.remove('hidden');
  let fill = document.getElementById('progress-fill');
  let width = 0;
  let interval = setInterval(() => {
    width++;
    fill.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById('final-modal').showModal();
    }
  }, 40);
}

/* INFO */

document.getElementById('info-btn').onclick = openInfo;

function openInfo() {
  const modal = document.getElementById('info-modal');
  const infoText = document.getElementById('info-text');
  infoText.innerText = cases[currentCase].info;
  modal.showModal();
}

function closeInfo() {
  document.getElementById('info-modal').close();
}

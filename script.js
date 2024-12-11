var amminoacidi = loadData(); // lista amminoacidi

var acid = null;
var seconds;
var timerInterval = null;
var right = 0;
var wrong = 0;

function drawAcid() {
    let count = amminoacidi.length;
    let index = Math.floor(Math.random() * count);
    //console.table(amminoacidi[index]);
    return amminoacidi[index];
}

function drawGrid() {
    let main = document.getElementById('main');
    main.innerHTML = ''; // Clear existing content

    // Row selector
    let selectorRow = document.createElement('div');
    selectorRow.classList.add('row');
    selectorRow.addEventListener('change', reset);

    let colLabel = document.createElement('div');
    colLabel.classList.add('col', 'text-end');
    colLabel.innerHTML = '<p>difficulty:</p>';
    selectorRow.appendChild(colLabel);

    let colSelect = document.createElement('div');
    colSelect.classList.add('col');

    let select = createSelector();
    colSelect.appendChild(select);
    selectorRow.appendChild(colSelect);

    main.appendChild(selectorRow);

    // Row timer, right, and wrong counters
    let counterRow = document.createElement('div');
    counterRow.classList.add('row', 'text-center');

    ['div_timer', 'div_right', 'div_wrong'].forEach(id => {
        let col = document.createElement('div');
        col.classList.add('col');

        let counterDiv = document.createElement('div');
        counterDiv.id = id;
        counterDiv.classList.add('counter');
        counterDiv.innerText = (id === 'div_timer') ? '15s' : '0';

        col.appendChild(counterDiv);
        counterRow.appendChild(col);
    });

    main.appendChild(counterRow);

    // Row image
    let imageRow = document.createElement('div');
    imageRow.classList.add('row');

    let imageCol = document.createElement('div');
    imageCol.classList.add('col');

    let box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = '<img id="image" src="" alt="formula image">';

    imageCol.appendChild(box);
    imageRow.appendChild(imageCol);

    main.appendChild(imageRow);

    // Row user input
    let userRow = document.createElement('div');
    userRow.classList.add('row');

    let inputCol = document.createElement('div');
    inputCol.classList.add('col');
    inputCol.innerHTML = '<input id="edit_name" type="text" placeholder="name">';
    inputCol.addEventListener('keydown', function(event) { if (event.key === 'Enter') guess(); });

    let buttonCol = document.createElement('div');
    buttonCol.classList.add('col');
    buttonCol.innerHTML = '<button class="button primary">send</button>';
    buttonCol.addEventListener('click', guess);

    userRow.appendChild(inputCol);
    userRow.appendChild(buttonCol);

    main.appendChild(userRow);

    function createSelector() {
        let selector = document.createElement('select');
        selector.name = 'difficulty';
        selector.id = 'select_difficulty';

        const options = ['easy', 'normal', 'hard'];
        options.forEach(element => {
            let option = document.createElement('option');
            option.value = element;
            option.text = element;
            selector.appendChild(option);
        });

        return selector;
    }

    startTimer();
    acid = drawAcid();
    document.getElementById('image').src = acid.formula; // Set the formula image
    //console.log(acid);
}

function startTimer() {
    let difficulty = document.getElementById('select_difficulty');
    let divTimer = document.getElementById('div_timer');

    switch (difficulty.value) {
        case 'easy': seconds = 16; break;
        case 'normal': seconds = 11; break;
        case 'hard': seconds = 6; break;
    }

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (seconds > 1) {
            seconds--;
            divTimer.innerText = `${seconds}s`;
        } else {
            let divWrong = document.getElementById('div_wrong');
            divWrong.innerText = ++wrong;
            clearInterval(timerInterval);
            reset();
        }
    }, 1000);
}

function guess() {
    let editName = document.getElementById('edit_name');
    let divRight = document.getElementById('div_right');
    let divWrong = document.getElementById('div_wrong');

    let nome = editName.value.toLowerCase();

    if (nome == acid.nome) {
        divRight.innerText = ++right;
    } else {
        divWrong.innerText = ++wrong;
    }

    reset();
}

function reset() {
    let editName = document.getElementById('edit_name');
    editName.value = "";

    startTimer();
    acid = drawAcid();

    let coin = Math.random() < 0.5;
    document.getElementById('image').src = (coin) ? acid.formula : acid.catena;
    //console.log(acid);
}

function loadData() {
    let count = 0;

    return [
        {
            "ID": count++,
            "nome": "alanina",
            "formula": "media/formula_alanina.jpg",
            "catena": "media/catena_alanina.jpg"
        },
        {
            "ID": count++,
            "nome": "arginina",
            "formula": "media/formula_arginina.jpg",
            "catena": "media/catena_arginina.jpg"
        },
        {
            "ID": count++,
            "nome": "asparagina",
            "formula": "media/formula_asparagina.jpg",
            "catena": "media/catena_asparagina.jpg"
        },
        {
            "ID": count++,
            "nome": "acido aspartico",
            "formula": "media/formula_acido_aspartico.jpg",
            "catena": "media/catena_acido_aspartico.jpg"
        },
        {
            "ID": count++,
            "nome": "cisteina",
            "formula": "media/formula_cisteina.jpg",
            "catena": "media/catena_cisteina.jpg"
        },
        {
            "ID": count++,
            "nome": "acido glutammico",
            "formula": "media/formula_acido_glutammico.jpg",
            "catena": "media/catena_acido_glutammico.jpg"
        },
        {
            "ID": count++,
            "nome": "glutammina",
            "formula": "media/formula_glutammina.jpg",
            "catena": "media/catena_glutammina.jpg"
        },
        {
            "ID": count++,
            "nome": "glicina",
            "formula": "media/formula_glicina.jpg",
            "catena": "media/catena_glicina.jpg"
        },
        {
            "ID": count++,
            "nome": "istidina",
            "formula": "media/formula_istidina.jpg",
            "catena": "media/catena_istidina.jpg"
        },
        {
            "ID": count++,
            "nome": "isoleucina",
            "formula": "media/formula_isoleucina.jpg",
            "catena": "media/catena_isoleucina.jpg"
        },
        {
            "ID": count++,
            "nome": "leucina",
            "formula": "media/formula_leucina.jpg",
            "catena": "media/catena_leucina.jpg"
        },
        {
            "ID": count++,
            "nome": "lisina",
            "formula": "media/formula_lisina.jpg",
            "catena": "media/catena_lisina.jpg"
        },
        {
            "ID": count++,
            "nome": "metionina",
            "formula": "media/formula_metionina.jpg",
            "catena": "media/catena_metionina.jpg"
        },
        {
            "ID": count++,
            "nome": "fenilalanina",
            "formula": "media/formula_fenilalanina.jpg",
            "catena": "media/catena_fenilalanina.jpg"
        },
        {
            "ID": count++,
            "nome": "prolina",
            "formula": "media/formula_prolina.jpg",
            "catena": "media/catena_prolina.jpg"
        },
        {
            "ID": count++,
            "nome": "serina",
            "formula": "media/formula_serina.jpg",
            "catena": "media/catena_serina.jpg"
        },
        {
            "ID": count++,
            "nome": "treonina",
            "formula": "media/formula_treonina.jpg",
            "catena": "media/catena_treonina.jpg"
        },
        {
            "ID": count++,
            "nome": "triptofano",
            "formula": "media/formula_triptofano.jpg",
            "catena": "media/catena_triptofano.jpg"
        },
        {
            "ID": count++,
            "nome": "tirosina",
            "formula": "media/formula_tirosina.jpg",
            "catena": "media/catena_tirosina.jpg"
        },
        {
            "ID": count++,
            "nome": "valina",
            "formula": "media/formula_valina.jpg",
            "catena": "media/catena_valina.jpg"
        }
    ];
}

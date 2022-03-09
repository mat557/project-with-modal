const key = `26043268-d6ac06e625b58b1f16ad5e7e2`;

const collectAndFetch = () =>{
    const inputText = document.getElementById('input-field');
    const input = inputText.value;
    inputText.value = '';
    // console.log(input);
    const url = `https://pixabay.com/api/?key=${key}&q=${input}+&image_type=photo&pretty=true`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => showElement(data.hits))
}


const showElement = elements =>{
    if(elements==''){
        document.write("nothing found! Try a diferent key word!");
    }
    // const elements = elementus.slice(0,6);
    // console.log(elements);
    const divToShow = document.getElementById('show-field');
    divToShow.innerHTML = '';
    for(const element of elements){
        console.log(element.user);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card bg-success card-edit  text-white rounded">
                    <img class="rounded image-edit" src="${element.largeImageURL}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.tags}</h5>
                    <button onclick="showModal('${element.userImageURL}','${element.user}')" class="btn text-center" type="button">Show Details</button>
                </div>
            </div>
        `
        divToShow.appendChild(div);
    }
}

const modalBg = document.querySelector('.modal-bg');
const showModal = (data1,data2) =>{
    // console.log(data1)
    const modalBtn = document.querySelector('.modal-btn');
    modalBg.classList.add('bg-active');
    modalBg.innerHTML = `
    <div class="modal">
        <img src="${data1}" alt="">
        <p>User Name</p>
        <p>${data2}</p>
        <button onclick="closeModal()" class="btn modal-close">Close</button>
    </div>
    
    `
}


// const modalBg = document.querySelector('.modal-bg');

const closeModal = () =>{
    const modalclose = document.querySelector('.modal-close');
    modalBg.classList.remove('bg-active');
}



const button = document.querySelector('button');

const petList= document.getElementById('petName');

button.addEventListener('click', ()=>{
    fetch('http://localhost:8080/api/v1/pets')
        .then(res => res.json())
        .then(pets =>{
            pets.forEach((pet) => {
                const list = document.createElement('li');
                    list.textContent= `Name: ${pet.name}`;
                    list.classList.add("pet-list");

                    
                const list2 = document.createElement('li');
                        list2.textContent= `Breed: ${pet.breed}`;
                        list2.classList.add("pet-list");

                   

                const list3 = document.createElement('li');
                        list3.textContent= `Age: ${pet.age}`;
                        list3.classList.add("pet-list");


               


            petList.appendChild(list);
            petList.appendChild(list2);
            petList.appendChild(list3);
            });
        })
})
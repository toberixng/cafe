const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let last = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    last.textContent = doc.data().last;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(last);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
cross.addEventListener('click', e => {
    e.stopPropagation()

    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('cafes').doc(id).delete()
})
}

// getting data
// db.collection('cafes').where('city', '==', 'Lagos').orderBy('name').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });



// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        last: form.last.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
    form.last.value = '';
});

// real time listener

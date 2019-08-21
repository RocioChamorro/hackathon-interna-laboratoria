import { editFirestore, filterFirestore, readData } from '../firestore.js'


const editObj = (property, value, id) => {
    const objPost = {}
    objPost[property] = value
    editFirestore(id, objPost);
}

export const readRegister = (query) => {
    const containerRegister = document.querySelector('#containerRegister');
    if (containerRegister) {
        containerRegister.innerHTML = '';
        query.forEach((doc) => {
            console.log(doc.data().fechaInicial);
            containerRegister.innerHTML +=
                `<table class='table tableWidth'>
                    <tbody>
                        <tr>
                            <td scope="row">${doc.data().photo}</th>
                            <td id='order-${doc.id}'>${doc.data().Nombre}</td>
                            <td id='order-${doc.id}'>${doc.data().fechaInicial}<br>${doc.data().fechaSalida !='' ? doc.data().fechaSalida : ''}</td>
                            <td>
                                <label class="switchBtn">
                                ${doc.data().estado==='on' ? `<input id='status-${doc.id}' data-id="${doc.id}" class='status' type="checkbox" checked = 'true'>`
                                 : `<input id='status-${doc.id}' data-id="${doc.id}" class='status' type="checkbox">` }
                                <div class="slide round"></div>
                        </label>
                            </td>
                            
                            <td></td>
                        </tr>
                    </tbody>
            </table>`

            document.querySelectorAll('.status').forEach(input => input.addEventListener('click', (e) => {
                console.log(e.target.checked)
                if (e.target.checked == true) {
                    console.log('pasastes por aquí')
                    editObj('estado', 'on', e.target.dataset.id)
                    console.log(e.target.checked)
                    editObj('fechaSalida', '', e.target.dataset.id)

                }
                else {
                    const fecha = new Date();
                    const options = {
                        year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
                    };
                    /* e.target.checked = true */
                    editObj('estado', 'of', e.target.dataset.id)
                    editObj('fechaSalida', `${fecha.toLocaleDateString("es-ES", options)}`, e.target.dataset.id)
                }

            

            })) 
            /* edit('privacidad', e.target.value, e.target.dataset.select)  */
        
    })
}

}

export let unsubscribeSnapshoreadData = null;
export let unsusbcribe = null;
export const filterValueBtn = () => {
    document.querySelectorAll(".btnFilter").forEach(btn => btn.addEventListener('click', (e) => {
        if (unsusbcribe) {
            unsusbcribe()
        }
        if(e.target.value != ''){
        unsusbcribe = filterFirestore(e.target.value, (query) => {
            readRegister(query);
        });
        }
        else{
            unsubscribeSnapshoreadData = readData('users', 'CreatedAt', (query) => {
                    readRegister(query);
            })

        }
    }))
}


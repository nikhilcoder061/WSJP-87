const userForm = document.querySelector('#userForm');
const userTableBody = document.querySelector('#userTableBody');

userForm.addEventListener(
    'submit', (event) => {
        event.preventDefault();

        const userData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value
        }

        const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];

        allUserData.push(userData);

        localStorage.setItem('allUserData', JSON.stringify(allUserData));
        showData();
    }
)

// show user Data in table

const showData = () => {
    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];

    let showUserData = "";

    allUserData.forEach(
        (user, index) => {
            showUserData = showUserData + `<tr>
                                <td>${index + 1}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td><button class="btn btn-danger btn-sm delete-btn" onclick="deleteUser(${index})">Delete</button></td>
                            </tr>`
        }
    )
    userTableBody.innerHTML = showUserData

}
showData();

// delete userData  start

const deleteUser = (indexNum) => {

    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];

    allUserData.splice(indexNum, 1);

    localStorage.setItem('allUserData', JSON.stringify(allUserData));
    
    showData();
}

// delete userData  end
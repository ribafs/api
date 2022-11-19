let content = document.querySelector("#content ul");
let header = document.querySelector("#content h1");

onload = getCustomers();

function getCustomers()
{
    fetch('http://localhost:8000/api/customers')
        .then(response => {return response.json()})
        .then(data => {
            header.innerHTML = "Customers"
            content.innerHTML = "";
            data.data.forEach(customer => {
                content.innerHTML += `
                    <li>
                        <a href="#" onclick="getCustomer(${customer.id})">${customer.name}</a>
                        <ul>
                            <li>${customer.email}
                        </ul>
                    </li>
                `
            });
        }
    );
}

function getCustomer(userId)
{
    fetch('http://localhost:8000/api/customers/'+userId)
        .then(response => {return response.json()})
        .then(customer => {
            header.innerHTML = customer.name;
            content.innerHTML = `
                <li>${customer.name}
                <li>${customer.email}
            `
        }
    );

}

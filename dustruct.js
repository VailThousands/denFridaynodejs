const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York'
};

const { name, age, email, city } = user;
console.log(`Name: ${name}, Age: ${age}, Email: ${email}, City: ${city}`);

const { name: userName, age: userAge } = user;
console.log(`User: ${userName}, Age: ${userAge}`);

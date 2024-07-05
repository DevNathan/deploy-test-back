import connect from "./connect/connect";
import User from "./schemas/user";

connect();

const user_inserted = await User.create(
    {
        email: "test123@gmail.com",
        name: "홍길동",
        age: 28,
    },
    {
        email: "test123312@gmail.com",
        name: "신사임당",
        age: 22,
    }
);

const users = await User.find();
console.log(users);

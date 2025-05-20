import axios from "axios";

async function getData() {
  const response = await axios.get(
    "http://localhost:3000/api/v1/user/details"
  );

  return response.data;
}

export default async function User() {
  const data = await getData();

  // await new Promise(r => setTimeout(r,5000));

  return (
    <div>
      {data.name}
      <div>{data.email}</div>
    </div>
  );
}

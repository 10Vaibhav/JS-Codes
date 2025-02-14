import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit, watch, formState: {errors, isSubmitting},} = useForm();

  async function onSubmit(data){

    // API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Here, we got the data in Object Form
    console.log("Submitting the form", data)
  }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label> First Name: </label>

            <input
            className={errors.firstName ? "input-error": ""}
            {...register("firstName", {
              required: true,
              minLength: {value: 3, message: "Min Length atLeast 3"},
              maxLength: {value: 10, message: "Max Length atMost 10"}
            })
            }/>

              {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
          </div>

          <div>
            <label> Middle Name: </label>
            <input
            className={errors.middleName ? "input-error": ""}
            {...register("middleName")}/>
            {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
          </div>


          <div>
            <label> Last Name: </label>
            <input
            className={errors.lastName ? "input-error": ""}
            {...register("lastName",
              {pattern : {
                value: /^[A-Za-z]+$/i,
                message: "Last Name is not as per the rules"
              }
              })
              }/>
            {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
          </div>

          <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"}/>
        </form>
    </>
  )
}

export default App

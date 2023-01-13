import { FieldValues, useForm } from "react-hook-form";
import { intToRoman } from "../utils/functions";
import { useState } from "react";

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [romanNumeral, setRomanNumeral] = useState("");

  /*function to call the converter function 
   ~@param(data) number to ne converted 
  */
  const handleConvertPressed = (data: FieldValues) => {
    setRomanNumeral(intToRoman(data.number));
  };

  return (
    <div>
      <div
        className="min-h-screen bg-gray-100 py-6 px-6 flex flex-col justify-center sm:py-12 bg-cover"
        style={{ backgroundImage: 'url("https://picsum.photos/id/1018/1000")' }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="relative px-2 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="max-w-md mx-auto">
              <form>
                <div>
                  <header className="font-medium leading-tight text-2xl mt-0 mb-2 text-blueviolet-600 text-center">
                    Integer to Roman Numeral
                  </header>
                  <input
                    {...register("number", {
                      valueAsNumber: true,
                      min: {
                        value: 1,
                        message: "Please write a Number between 1 to 1000",
                      },
                      max: {
                        value: 1000,
                        message: "Please write a Number between 1 to 1000",
                      },
                    })}
                    placeholder="Type a number"
                    type="number"
                    className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {errors.number?.message ? (
                    <text>{errors.number.message as string}</text>
                  ) : (
                    ""
                  )}
                  <button
                    className="inline-block mt-3 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out text-center m-auto"
                    onClick={handleSubmit(handleConvertPressed)}
                  >
                    Convert
                  </button>
                </div>
                <h2 className="text-center mt-5">
                  Roman Number : {romanNumeral}
                </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

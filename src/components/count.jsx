export default function Count({ label, value }) {


    return (
        <div className="bg-white p-2 px-4 rounded-md border-2  flex flex-col  justify-center items-center">
            <div className="text-md font-semibold text-black">
                {value}
            </div>
            <div className="text-md text-black font-extralight">
                {label}
            </div>
        </div>
    );



}
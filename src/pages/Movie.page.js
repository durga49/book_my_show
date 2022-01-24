const launchRazorPay = () =>{
    let options = {
        key:"rzp_test_OTOzRcBKMaIPOj",
        amount:10000,
        currency:"INR",
        name:"BMS Clone",
        description:"Movie Tickets",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler:() =>{
            alert("Payment Done");
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
};
const Movie = () =>{
    return (
        <>
            <div className="w-full h-full my-16">
                <img className="w-full h-full" alt="movieImage" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"/>
            </div>
            <button onClick={launchRazorPay} class="m-16 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
            </button>
        </>
    )
}
export default Movie;
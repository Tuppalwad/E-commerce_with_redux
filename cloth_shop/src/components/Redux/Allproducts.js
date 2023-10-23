import { createSlice } from "@reduxjs/toolkit";
const productdata = [{
    id: 0,
    name: "ComfortBlend Classic Tee",
    price: 399,
    offer: 10,
    quantity: 20,
    category: "grocery",
    imageid: "6526450b78d8efcd4d17",
    color: ["red", "blue", "yellow", "green"],
    size: ["S", "M", "L", "XL"],
    reletedproduct: ["1", "3", "4"],
    gender: "male",
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/6526450b78d8efcd4d17/preview?project=64fe9e67d71d1c56225a",

},
{
    id: 1,
    name: "Eco-Friendly Cotton Crew ",
    price: 299,
    offer: 10,
    quantity: 20,
    category: "grocery",
    imageid: "65264595c5a24d1bed86",
    color: ["red", "blue", "yellow", "pink"],
    size: ["S", "M", "L", "XL"],
    reletedproduct: ["1", "3", "4", "2"],
    gender: "female",
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

    imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/65264595c5a24d1bed86/preview?project=64fe9e67d71d1c56225a",
},
{
    id: 2,
    name: "Urban Street Style Shirt",
    price: 199,
    offer: 10,
    quantity: 20,
    category: "grocery",
    gender: "male",
    imageid: "652645d7bac4f2fde358",
    color: ["red", "blue", "yellow", "white"],
    size: ["S", "M", "L", "XL"],
    reletedproduct: ["1", "3"],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

    imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/652645d7bac4f2fde358/preview?project=64fe9e67d71d1c56225a",
},
{
    id: 3,
    name: "Retro Graphic Print Top",
    price: 499,
    offer: 10,
    quantity: 20,
    category: "grocery",
    imageid: "65264614baa4f7c02a7e",
    color: ["red", "blue", "yellow", "green"],
    size: ["S", "M", "L", "XL"],
    gender: "female",
    reletedproduct: ["1", "3", "4"],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

    imageUrl:
        "https://cloud.appwrite.io/v1/storage/buckets/64fe9f282cfefd735881/files/65264614baa4f7c02a7e/preview?project=64fe9e67d71d1c56225a",
},

]


const allproducts = createSlice({
    name: 'allproducts',
    initialState: productdata,
    reducers: {
        setAllproducts: (state, action) => {
            return state = action.payload.allproducts;
        },

    }
});

const { reducer, actions } = allproducts;
export const { setAllproducts } = actions;

export default reducer;
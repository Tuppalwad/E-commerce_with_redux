import Api from "./Api";

import { storage } from '../../Appwrite/Client';
const result = async (id) => {
    try {
        const response = await storage.getFilePreview('64fe9f282cfefd735881', id);
        const url = response
        return url;
    } catch (error) {
        console.error(error);
    }
}

export const Getdata = async () => {
    const res = await Api.get('get_product')
    const newdata = []
    if (res.data.status === "SUCCESS") {
        res.data.data.map(async (item) => {
            const url = await result(item.image)
            newdata.push({ ...item, url })
        })
    }
    return newdata
}
export const Getdataid = async (id) => {
    const res = await Api.get(`/api/products/${id}`)
    return res.data
}
export const Getdatacategory = async (category) => {
    const res = await Api.get(`/api/products/category/${category}`)
    return res.data
}
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Octokit } from "@octokit/rest";
import axios from "axios";
import moment from "moment";
const octokit = new Octokit();


export const getAllGallery = createAsyncThunk('gallerySlice/getAllGallery', async () => {
    let result = []
    let promise = []

    const githubData = await Promise.all([
        octokit.repos.get({ owner: 'andribob26', repo: 'app-pengukur-luas-lahan' })
            .then((res) => ({ category: 'mobile', data: res.data })),

        octokit.repos.get({ owner: 'andribob26', repo: 'bobporto' })
            .then((res) => ({ category: 'web', data: res.data }))
    ])

    githubData.forEach((data) => {
        promise.push(axios.get(data.data.languages_url).then((res) => (res.data)))
    })

    const languagesData = await Promise.all(promise)

    const total = languagesData.map((data) => {
        let result = 0
        for (const key in data) {
            result += data[key]
        }

        return result
    })

    const objToArr = (obj, total) => {
        let result = []
        for (const key in obj) {
            result.push({ name: key, percent: (obj[key] / total) * 100 })
        }
        return result
    }



    for (let i = 0; i < githubData.length; i++) {

        result.push({
            category: githubData[i].category,
            name: githubData[i].data.name,
            url: githubData[i].data.html_url,
            languagesData: objToArr(languagesData[i], total[i]),
            updatedAt: moment(githubData[i].data.updated_at, "YYYYMMDD").fromNow(),
        })
    }

    return result
})



const initialState = {
    status: '',
    galleryData: [],
}

const gallerySlice = createSlice({
    name: "gallerySlice",
    initialState,
    extraReducers: {
        [getAllGallery.pending]: (state) => {
            state.status = 'pending';
        },

        [getAllGallery.fulfilled]: (state, action) => {
            state.galleryData = action.payload;
            state.status = 'fulfilled';
        },

        [getAllGallery.rejected]: (state) => {
            state.status = 'rejected';
        },
    }
})

export default gallerySlice.reducer
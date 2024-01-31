
import create from 'zustand'

export const useQueueStore = create((set, get) => ({
    size: 0,
    array: [],
    data: [],
    dequeue_item: [],
    storeQueueSize: (queueSize) => { set({ size: queueSize }) },
    resetArray: () => {
        const state = get()
        console.log(state)
        const resetData = {
            array: [],
            data: [],
            size: 0,
        }
        set(resetData)
        console.log("state result", get())
    },
    enQueue: (e) => {
        const state = get();
        const data = state.data;
        console.log(data)
        data.push(e)
        const newData = {
            array: data,
        }
        console.log(newData)
        set(newData)
    },
    dequeue: () => {
        const state = get();
        const data = state.array;
        const result = data[0];
        const len = data.length;
        for (var i = 1; i < len; i++) {
            data[i - 1] = data[i]
        }
        data.pop()
        const newData = {
            array: data,
            dequeue_item: result,
        }
        set(newData)
        console.log(newData)
        console.log("length", data)
    },
}))

// const state = get();
// const data = state.array;
// const result = data.pop();
// const newData = {
//     array: data,
//     pop_result: result,
// }
// console.log("Newdata" + newData)
// set(newData)
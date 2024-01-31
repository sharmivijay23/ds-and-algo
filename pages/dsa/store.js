import { create } from 'zustand';

export const useStackStore = create((set, get) => ({
    array: [],
    data: [],
    pop_result: [],
    size: 0,
    storeStackSize: (stackSize) => { set({ size: stackSize }) },
    resetArray: () => {
        const state = get()
        console.log(state)
        const resetData = {
            array: [],
            data: [],
            pop_result: [],
            size: 0,
        }
        set(resetData)
        console.log("state result", get())
    },
    storeValue: (e) => {
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
    popItem: () => {
        const state = get();
        const data = state.array;
        const result = data.pop();
        const newData = {
            array: data,
            pop_result: result,
        }
        console.log("Newdata" + newData)
        set(newData)
    },



    // Method of getting previous value to set the new value
    storeValue1: (e) => set((state) => {
        return {
            array: [...state["array"], e]
        }

    }),
    //Method to set the new data directly 
    storeValue2: (e) => {
        const data = [];
        data.push(e)
        const newData = {
            array: data,
        }
        console.log(newData)
        set(newData)
    }
}))



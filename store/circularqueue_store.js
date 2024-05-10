
import { create } from 'zustand';

export const useCircularQueueStore = create((set, get) => ({
    size: 0,
    array: [],
    data: [],
    head: 0,
    tail: 0,
    item_dequeued: [],
    len: 0,
    new_length: () => get().array.filter(element => element !== undefined).length,
    storeCircularQueueSize: (queueSize) => { set({ size: queueSize }) },
    // storeValue: (head, number) => {
    //     const state = get();
    //     const data = state.data;
    //     const head = state.head;
    //     data[head] = number;
    //     const newData = {
    //         array: data,
    //         head: head,
    //     }
    //     set(newData)
    // },

    enQueue: (number) => {
        const state = get();
        const data = state.data;
        let tail = state.tail
        data[tail] = number;
        tail = tail + 1;

        const newData = {
            array: data,
            tail: tail,
        }
        set(newData)
        console.log(newData)

    },
    deQueue: () => {
        const state = get();
        const data = state.array;
        let head = state.head;

        const result = data[head]
        data[head] = undefined;
        head = head + 1;

        const newData = {
            item_dequeued: result,
            array: data,
            head: head,
        }
        set(newData)
        console.log(newData, " after dequeue")
    },
    // enqueue1: () => {
    //     if (number) {
    //         if (((head === ((tail) % size)) && (length !== 0))) {
    //             console.log("Queue is full")
    //         }
    //         else {
    //             const state = get();
    //             const data = state.data;
    //             let tail = state.tail
    //             data[tail] = number;
    //             tail = tail + 1;
    //             len = get().array.filter(element => element !== undefined).length
    //             const newData = {
    //                 array: data,
    //                 tail: tail,
    //                 len:len
    //             }
    //             set(newData)
    //             console.log(newData)
    //         }
    //         enQueue(number)
    //         setNumber("")
    //         setIsDequeueItem(false)
    //         if (new_length() >= size) {
    //             setIsEnterItem(true)
    //         }
    //     }
    // }
}))




// storeValue: (e) => set((state) => {
//     const state = get();
//     return (
//         array: [...state["array"], e]
//     )
// })
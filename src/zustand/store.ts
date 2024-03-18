import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocationType {
    address: string;
    location: [number, number];
    setAddress: (newAddress: string) => void;
    setLocation: (newLocation: [number, number]) => void;
}

const LocStore = create(
    persist<LocationType>(
        (set) => ({
            address: "종로구 종로1가",
            location: [37.570227990912244, 126.98315081716676],
            setAddress: (newAddress: string) =>
                set((state) => ({ ...state, address: newAddress })),
            setLocation: (newLocation: [number, number]) =>
                set((state) => ({ ...state, location: newLocation })),
        }),
        {
            name: "currentLocation",
        }
    )
);

export default LocStore;

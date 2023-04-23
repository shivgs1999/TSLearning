console.log(`-----------Interface Assignment--------------`);


interface Car {
    Wheel(): void;
    CheckAC(): void;
    callFacility(): string;
    GPS(): string;
}

console.log(`~~~~~~~~~~~~~~~   Toyota Car  ~~~~~~~~~~~~~~~`);

class Toyota implements Car {
    Wheel() : string {
        return '4 wheeler';
    }

    CheckAC() : string {
        return 'Ac is available'
    }

    callFacility() : string {
        return 'Call Facility is available'
    }
    Price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
        return 5;
    }
    Color(): string {
        return 'white';
    }
    GPS(): string {
        return `GPS is not supported in Toyota Car`
    }
}
    let objToyota=new Toyota();
    console.log(objToyota.GPS());

    console.log(`~~~~~~~~~~~~~~~   Hyundai Car   ~~~~~~~~~~~~~~~`);

    class Hyundai implements Car {
        Wheel() : string {
            return '4 wheeler';
        }
    
        CheckAC() : string {
            return 'Ac is available'
        }
    
        callFacility() : string {
            return 'Call Facility is available'
        }
        Price(): number {
            return 1000000;
        }
        getTotalSeats(): number {
            return 5;
        }
        Color(): string {
            return 'white';
        }
        GPS(): string {
            return `GPS is  supported in Hyundai Car`
        }
    }
        let objHyundai=new Hyundai();
        console.log(objHyundai.GPS());
    

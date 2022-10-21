class Device {
  constructor({
    name,
    resolution: { x, y },
    capacity,
    price,
    color,
    GPU,
    CPU,
    memory,
  }) {
    this.name = name;
    this.#resolution = { x, y };
    this.#capacity = capacity;
    this.price = price;
    this.#color = color;
    this.#capacity = capacity;
    this.#GPU = GPU;
    this.#CPU = CPU;
    this.#memory = memory;
  }
  #resolution = { x: 0, y: 0 };
  #capacity = 0;
  #color = null;
  #GPU = null;
  #CPU = null;
  #memory = 0;

  #isOn = false;
  #batteryLevel = 100;
  #displayOn = false;

  #charging;
  #consumption;

  switchOn() {
    if (this.#batteryLevel > 0) this.#isOn = true;
  }

  switchOff() {
    this.#isOn = false;
  }

  setCharge(ON = true) {
    if (ON) {
      this.#charging = setInterval(() => {
        this.#batteryLevel += 5;
      }, 1000);
    } else {
      clearInterval(this.#charging);
    }
  }

  setDisplayOn(ON = true) {
    if (ON) {
      this.#consumption = setInterval(() => {
        this.#batteryLevel -= 2;
      }, 1000);
    }
  }

  useMemory(count) {
    this.#memory -= count;
    return this.#memory;
  }

  getInfo() {
    return {
      memory: this.#memory,
      battery: this.#batteryLevel,
      isOn: this.#isOn,
    };
  }
}

class Phone extends Device {
  constructor(props) {
    super(props);

    this.#camera = props.camera;
  }

  #camera = null;
  #photos = [];

  takePicture(image) {
    const { isOn } = super.getInfo();

    if (!isOn) throw new Error(`Turn ${this.name} ON!`);

    this.#photos.push(image);
    super.useMemory(5);
  }

  showPicture(index) {
    // CHECK BATTERY
    if (index === undefined) {
      console.log(this.#photos[index]);
      return;
    }

    console.log(this.#photos);
  }
}

const iPhone = new Phone({
  camera: "20Mp",
  name: "Iphone 15",
  resolution: { x: 1600, y: 3200 },
  capacity: "5000",
  price: "1000$",
  color: "black",
  GPU: "",
  CPU: "",
  memory: 100,
});

console.log(iPhone.getInfo());

iPhone.switchOn();

iPhone.takePicture("flower");

console.log(iPhone.getInfo());

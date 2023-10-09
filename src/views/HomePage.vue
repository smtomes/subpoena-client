<template>
  <div class="bg-gray-900 text-white min-h-screen p-4">
    <div class="max-w-3xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-6">Subpoena Generator</h1>

      <!-- Toggle switches for District Clerk and District Judge -->
      <div class="flex justify-between mb-6">
        <div>
          <label class="block mb-2" for="districtClerk">District Clerk:</label>
          <label class="switch">
            <input type="checkbox" v-model="enableDistrictClerk" @change="toggleDistrictClerk" />
            <span class="slider"></span>
          </label>
        </div>
        <div>
          <label class="block mb-2" for="districtJudge">District Judge:</label>
          <label class="switch">
            <input type="checkbox" v-model="enableDistrictJudge" @change="toggleDistrictJudge" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- Rest of your form elements -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Cause Number -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="causeNumber">Cause Number:</label>
          <input id="causeNumber" v-model="causeNumber" placeholder="Enter Cause Number"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Court -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="courtNumber">Court:</label>
          <select id="courtNumber" v-model="courtNumber"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black">
            <option value="52nd">52nd</option>
            <option value="440th">440th</option>
          </select>
        </div>

        <!-- Defendant's Name -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="defendantName">Defendant's Name:</label>
          <input id="defendantName" v-model="defendantName" placeholder="Enter Defendant's Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Proceeding -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="proceeding">Proceeding:</label>
          <input id="proceeding" v-model="proceeding" placeholder="Enter Proceeding"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Appearance Date -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="appearanceDate">Appearance Date:</label>
          <input id="appearanceDate" v-model="appearanceDate" placeholder="Enter Appearance Date"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Appearance Location -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="appearanceLocation">Appearance Location:</label>
          <select id="appearanceLocation" v-model="appearanceLocation"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black">
            <option value="52nd Courthouse">52nd Courthouse</option>
            <option value="440th Courthouse">440th Courthouse</option>
            <option value="Gatesville Civic Center">Gatesville Civic Center</option>
          </select>
        </div>

        <!-- Witness Name -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="witnessName">Witness Name:</label>
          <input id="witnessName" v-model="witnessName" placeholder="Enter Witness Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Witness Address -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="witnessAddress">Witness Address:</label>
          <input id="witnessAddress" v-model="witnessAddress" placeholder="Enter Witness Address"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Witness Phone Number -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="witnessPhoneNumber">Witness Phone Number:</label>
          <input id="witnessPhoneNumber" v-model="witnessPhoneNumber" placeholder="Enter Witness Phone Number"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Witness Vocation -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="witnessVocation">Witness Vocation:</label>
          <input id="witnessVocation" v-model="witnessVocation" placeholder="Enter Witness Vocation"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Service Date -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="serviceDate">Service Date:</label>
          <input id="serviceDate" v-model="serviceDate" placeholder="Enter Service Date"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black" />
        </div>

        <!-- Prosecutor -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="prosecutor">Prosecutor:</label>
          <select id="prosecutor" v-model="selectedProsecutor"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black">
            <option v-for="prosecutor in prosecutors" :value="prosecutor">
              {{ prosecutor.name }}
            </option>
          </select>
        </div>

        <!-- Items to Bring -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="itemsToBring">Items to Bring:</label>
          <input id="itemsToBring" v-model="itemsToBring" placeholder="Enter Items to Bring"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black"
            :disabled="!enableItemsToBring" />
          <label class="switch">
            <input type="checkbox" v-model="enableItemsToBring" />
            <span class="slider"></span>
          </label>
        </div>

        <!-- Business Name -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="businessName">Business Name:</label>
          <input id="businessName" v-model="businessName" placeholder="Enter Business Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-black"
            :disabled="!enableBusinessName" />
          <label class="switch">
            <input type="checkbox" v-model="enableBusinessName" />
            <span class="slider"></span>
          </label>
        </div>

        <!-- Compliance by email -->
        <div>
          <label class="block text-lg font-semibold mb-2" for="complianceByEmail">Compliance by email?</label>
          <label class="switch">
            <input type="checkbox" v-model="enableComplianceByEmail" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- Generate Button -->
      <button @click="generateSubpoena" class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Generate Subpoena
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      causeNumber: "",
      courtNumber: "",
      defendantName: "",
      proceeding: "Jury Trial",
      appearanceDate: "",
      appearanceLocation: "",
      witnessName: "",
      witnessAddress: "",
      witnessPhoneNumber: "",
      witnessVocation: "Unknown",
      serviceDate: "",
      prosecutor: "",
      stateBarNo: "",
      email: "",
      title: "",
      itemsToBring: "",
      enableItemsToBring: false,
      businessName: "",
      enableBusinessName: false,
      enableComplianceByEmail: false,
      selectedProsecutor: null,
      prosecutors: [],
      enableDistrictClerk: true, // District Clerk is enabled by default
      enableDistrictJudge: false,
    };
  },
  computed: {
    isEitherToggleEnabled() {
      return this.enableDistrictClerk || this.enableDistrictJudge;
    },
  },
  methods: {
    toggleDistrictClerk() {
      this.enableDistrictClerk = true;
      this.enableDistrictJudge = false;
    },
    toggleDistrictJudge() {
      this.enableDistrictJudge = true;
      this.enableDistrictClerk = false;
    },
  },
};
</script>



<style scoped>
/* Toggle switch styles (unchanged) */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #555555;
  /* Dark gray background */
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #ffffff;
  /* White circle */
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked+.slider {
  background-color: #2196F3;
  /* Blue background when checked */
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

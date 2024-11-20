// component and state
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   const [Count, setCount] = useState(0);
//   return (
//     <View style={styles.container}>
//       <Text>Welcome my firstapp! </Text>
//       <Hello name="Pugal" />
//       <Hello name="Jegan" />
//       <Hello name="Karthi" />
//       <Hello name="Nanban" />
//       <Text>Count: {Count} </Text>
//       <></>
//       <></>
//       <Button onPress={() => { setCount(Count + 1) }} title='Increse' />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const Hello = (props) => {
//   return <Text>Hello {props.name} </Text>
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Handling text
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// export default function App() {
//   const [text, setText] = useState("")
//   return (
//     <View style={styles.container}>
//       <TextInput onChangeText={(newtext) => { setText(newtext) }} placeholder='Text Here!' />
//       <Text>{text}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Flat List 
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList } from 'react-native';

// export default function App() {
//   const countries = [
//     "Afghanistan", "Brazil", "Canada", "Denmark", "Egypt",
//     "France", "Germany", "Hungary", "India", "Japan",
//     "Kenya", "Laos", "Mexico", "Netherlands", "Oman",
//     "Pakistan", "Qatar", "Russia", "Spain", "Thailand",
//     "Uganda", "Vietnam", "Wales", "Xanadu (fictional)",
//     "Yemen", "Zambia"
//   ];

//   const countriesMap = countries.map((country, index) => ({
//     countryName: country,
//     key: index.toString(), // Ensure the key is a string for FlatList
//   }));

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Country Names! </Text>
//       <FlatList
//         data={countriesMap}
//         renderItem={({ item }) => <Text style={styles.text}>{item.countryName}</Text>}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#85c1e9', // Dark grey-blue
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50, // To avoid overlapping with the status bar
//   },
//   text: {
//     fontSize: 15,
//     padding: 10,
//     margin: 5,
//     backgroundColor: "#f8f9f9",
//     color: "#3498db",
//     textAlign: "center",
//     borderStyle: "solid",
//     borderColor: "#a2d9ce", // Smoky white
//     borderWidth: 2, // Required for the border to show
//     borderRadius: 10, // Makes the border rounded
//   },
//   header: {
//     fontSize: 30,
//     padding: 20,
//     color: "#f5f5f5", // Light purple
//     backgroundColor: "#17202a",
//     borderStyle: "solid",
//     borderColor: "#edbb99", // Smoky white
//     borderWidth: 2, // Required for the border to show
//     borderRadius: 10, // Makes the border rounded
//     marginBottom: 20, // Spacing below the header
//   },
// });

//RTO Tamilnadu 
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, TextInput } from 'react-native';
// import { useState } from 'react';

// export default function App() {
//   const [search, setSearch] = useState('');
//   const rtoData = [
//     { name: "CHENNAI (CENTRAL) ", regNumbers: ["TN01"] },
//     { name: "CHENNAI (NORTH WEST) ", regNumbers: ["TN02"] },
//     { name: "CHENNAI (NORTH EAST) ", regNumbers: ["TN03"] },
//     { name: "CHENNAI (EAST) ", regNumbers: ["TN04"] },
//     { name: "CHENNAI (NORTH) ", regNumbers: ["TN05"] },
//     { name: "CHENNAI (SOUTH-EAST) ", regNumbers: ["TN06"] },
//     { name: "CHENNAI (SOUTH) ", regNumbers: ["TN07"] },
//     { name: "Chennai West ", regNumbers: ["TN09"] },
//     { name: "CHENNAI (SOUTH-WEST) ", regNumbers: ["TN10"] },
//     { name: "TAMBARAM ", regNumbers: ["TN11"] },
//     { name: "PARUTHIPATTU ", regNumbers: ["TN12"] },
//     { name: "AMBATTUR ", regNumbers: ["TN13"] },
//     { name: "SHOLINGANALLUR ", regNumbers: ["TN14"] },
//     { name: "Ulundurpet ", regNumbers: ["TN15"] },
//     { name: "Kalakurichi ", regNumbers: ["TN15M"] },
//     { name: "Tindivanam & Enforcement wing ", regNumbers: ["TN16"] },
//     { name: "REDHILLS ", regNumbers: ["TN18"] },
//     { name: "CHENGALPATTU ", regNumbers: ["TN19"] },
//     { name: "THIRUVALLUR ", regNumbers: ["TN20"] },
//     { name: "KANCHIPURAM ", regNumbers: ["TN21"] },
//     { name: "MEENAMBAKKAM ", regNumbers: ["TN22"] },
//     { name: "Vellore ", regNumbers: ["TN23"] },
//     { name: "KRISHNAGIRI ", regNumbers: ["TN24"] },
//     { name: "Tiruvannamalai ", regNumbers: ["TN25"] },
//     { name: "NAMAKKAL (NORTH) ", regNumbers: ["TN28"] },
//     { name: "DHARMAPURI ", regNumbers: ["TN29"] },
//     { name: "SALEM (WEST) ", regNumbers: ["TN30"] },
//     { name: "Cuddalore ", regNumbers: ["TN31"] },
//     { name: "Viluppuram ", regNumbers: ["TN32"] },
//     { name: "ERODE EAST ", regNumbers: ["TN33"] },
//     { name: "Tiruchengode ", regNumbers: ["TN34"] },
//     { name: "GOBI ", regNumbers: ["TN36"] },
//     { name: "COIMBATORE (SOUTH) ", regNumbers: ["TN37"] },
//     { name: "COIMBATORE NORTH ", regNumbers: ["TN38"] },
//     { name: "Tirupur North ", regNumbers: ["TN39"] },
//     { name: "METTUPALAYAM ", regNumbers: ["TN40"] },
//     { name: "POLLACHI ", regNumbers: ["TN41"] },
//     { name: "Tirupur South ", regNumbers: ["TN42"] },
//     { name: "OOTY ", regNumbers: ["TN43"] },
//     { name: "TRICHY WEST ", regNumbers: ["TN45"] },
//     { name: "PERAMBALUR ", regNumbers: ["TN46"] },
//     { name: "KARUR ", regNumbers: ["TN47"] },
//     { name: "SRIRANGAM ", regNumbers: ["TN48"] },
//     { name: "Thanjavur ", regNumbers: ["TN49"] },
//     { name: "Tiruvarur ", regNumbers: ["TN50"] },
//     { name: "Nagapattinam ", regNumbers: ["TN51"] },
//     { name: "SANKAGIRI ", regNumbers: ["TN52"] },
//     { name: "SALEM (EAST) ", regNumbers: ["TN54"] },
//     { name: "Pudukkottai ", regNumbers: ["TN55"] },
//     { name: "PERUNDURAI ", regNumbers: ["TN56"] },
//     { name: "Dindigul ", regNumbers: ["TN57"] },
//     { name: "Madurai(South) ", regNumbers: ["TN58"] },
//     { name: "Madurai (North) ", regNumbers: ["TN59"] },
//     { name: "Theni ", regNumbers: ["TN60"] },
//     { name: "ARIYALUR ", regNumbers: ["TN61"] },
//     { name: "SIVAGANGAI ", regNumbers: ["TN63"] },
//     { name: "Madurai (Central) ", regNumbers: ["TN64"] },
//     { name: "RAMANATHAPURAM ", regNumbers: ["TN65"] },
//     { name: "COIMBATORE (CENTRAL) ", regNumbers: ["TN66"] },
//     { name: "VIRUDHUNAGAR ", regNumbers: ["TN67"] },
//     { name: "Kumbakonam ", regNumbers: ["TN68"] },
//     { name: "TUTICORIN ", regNumbers: ["TN69"] },
//     { name: "HOSUR ", regNumbers: ["TN70"] },
//     { name: "TIRUNELVELI ", regNumbers: ["TN72"] },
//     { name: "Ranipet ", regNumbers: ["TN73"] },
//     { name: "NAGERCOIL ", regNumbers: ["TN74"] },
//     { name: "MARTHANDAM ", regNumbers: ["TN75"] },
//     { name: "TENKASI ", regNumbers: ["TN76"] },
//     { name: "ATTUR ", regNumbers: ["TN77"] },
//     { name: "DHARAPURAM ", regNumbers: ["TN78"] },
//     { name: "SANKARANKOVIL ", regNumbers: ["TN79"] },
//     { name: "TRICHY (EAST) ", regNumbers: ["TN81"] },
//     { name: "Mayiladuthurai ", regNumbers: ["TN82"] },
//     { name: "Vaniyambadi ", regNumbers: ["TN83"] },
//     { name: "Tirupattur ", regNumbers: ["TN83M"] },
//     { name: "SRIVILLIPUTTUR ", regNumbers: ["TN84"] },
//     { name: "Kundrathur ", regNumbers: ["TN85"] },
//     { name: "ERODE WEST ", regNumbers: ["TN86"] },
//     { name: "SRIPERUMBUDUR ", regNumbers: ["TN87"] },
//     { name: "NAMAKKAL SOUTH ", regNumbers: ["TN88"] },
//     { name: "SALEM (SOUTH) ", regNumbers: ["TN90"] },
//     { name: "Chidambaram ", regNumbers: ["TN91"] },
//     { name: "THIRUCHENDUR ", regNumbers: ["TN92"] },
//     { name: "METTUR ", regNumbers: ["TN93"] },
//     { name: "Palani ", regNumbers: ["TN94"] },
//     { name: "SIVAKASI ", regNumbers: ["TN95"] },
//     { name: "KOVILPATTI ", regNumbers: ["TN96"] },
//     { name: "ARANI ", regNumbers: ["TN97"] },
//     { name: "COIMBATORE (WEST) ", regNumbers: ["TN99"] }
//   ];

//   const filteredRTOs = rtoData.filter((rto) =>
//     rto.regNumbers.some((code) =>
//       code.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   const handlePress = (rto) => {
//     Alert.alert(
//       rto.name,
//       `Vehicle Registration Code: ${rto.regNumbers.join(", ")}`,
//       [{ text: "OK" }]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Tamil Nadu RTOs </Text>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by RTO Code..."
//         value={search}
//         onChangeText={setSearch}
//       />

//       {/* Displaying filtered RTOs */}
//       <FlatList
//         data={filteredRTOs}
//         keyExtractor={(item) => item.regNumbers.join(',')}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handlePress(item)}>
//             <Text style={styles.text}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#85c1e9', // Light blue
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50, // To avoid overlapping with the status bar
//   },
//   header: {
//     fontSize: 30,
//     padding: 20,
//     color: "#f5f5f5", // White text
//     backgroundColor: "#17202a", // Black background
//     borderStyle: "solid",
//     borderColor: "#edbb99", // Beige border
//     borderWidth: 2, // Border width
//     borderRadius: 10, // Rounded corners
//     marginBottom: 20, // Space below the header
//   },
//   searchBar: {
//     height: 38,
//     color: "#000",
//     width: '90%',
//     borderColor: '#000',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//     borderRadius: 70,
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 15,
//     padding: 10,
//     margin: 5,
//     backgroundColor: "#f8f9f9", // White background
//     color: "#3498db", // Blue text
//     textAlign: "center",
//     borderStyle: "solid",
//     borderColor: "#a2d9ce", // Light green border
//     borderWidth: 2, // Border width
//     borderRadius: 10, // Rounded corners
//   },
// });


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedRto, setSelectedRto] = useState(null); // Track selected RTO for popup

  const rtoData = [
    { name: "CHENNAI (CENTRAL) ", regNumbers: ["TN01"] },
    { name: "CHENNAI (NORTH WEST) ", regNumbers: ["TN02"] },
    { name: "CHENNAI (NORTH EAST) ", regNumbers: ["TN03"] },
    { name: "CHENNAI (EAST) ", regNumbers: ["TN04"] },
    { name: "CHENNAI (NORTH) ", regNumbers: ["TN05"] },
    { name: "CHENNAI (SOUTH-EAST) ", regNumbers: ["TN06"] },
    { name: "CHENNAI (SOUTH) ", regNumbers: ["TN07"] },
    { name: "Chennai West ", regNumbers: ["TN09"] },
    { name: "CHENNAI (SOUTH-WEST) ", regNumbers: ["TN10"] },
    { name: "TAMBARAM ", regNumbers: ["TN11"] },
    { name: "PARUTHIPATTU ", regNumbers: ["TN12"] },
    { name: "AMBATTUR ", regNumbers: ["TN13"] },
    { name: "SHOLINGANALLUR ", regNumbers: ["TN14"] },
    { name: "Ulundurpet ", regNumbers: ["TN15"] },
    { name: "Kalakurichi ", regNumbers: ["TN15M"] },
    { name: "Tindivanam & Enforcement wing ", regNumbers: ["TN16"] },
    { name: "REDHILLS ", regNumbers: ["TN18"] },
    { name: "CHENGALPATTU ", regNumbers: ["TN19"] },
    { name: "THIRUVALLUR ", regNumbers: ["TN20"] },
    { name: "KANCHIPURAM ", regNumbers: ["TN21"] },
    { name: "MEENAMBAKKAM ", regNumbers: ["TN22"] },
    { name: "Vellore ", regNumbers: ["TN23"] },
    { name: "KRISHNAGIRI ", regNumbers: ["TN24"] },
    { name: "Tiruvannamalai ", regNumbers: ["TN25"] },
    { name: "NAMAKKAL (NORTH) ", regNumbers: ["TN28"] },
    { name: "DHARMAPURI ", regNumbers: ["TN29"] },
    { name: "SALEM (WEST) ", regNumbers: ["TN30"] },
    { name: "Cuddalore ", regNumbers: ["TN31"] },
    { name: "Viluppuram ", regNumbers: ["TN32"] },
    { name: "ERODE EAST ", regNumbers: ["TN33"] },
    { name: "Tiruchengode ", regNumbers: ["TN34"] },
    { name: "GOBI ", regNumbers: ["TN36"] },
    { name: "COIMBATORE (SOUTH) ", regNumbers: ["TN37"] },
    { name: "COIMBATORE NORTH ", regNumbers: ["TN38"] },
    { name: "Tirupur North ", regNumbers: ["TN39"] },
    { name: "METTUPALAYAM ", regNumbers: ["TN40"] },
    { name: "POLLACHI ", regNumbers: ["TN41"] },
    { name: "Tirupur South ", regNumbers: ["TN42"] },
    { name: "OOTY ", regNumbers: ["TN43"] },
    { name: "TRICHY WEST ", regNumbers: ["TN45"] },
    { name: "PERAMBALUR ", regNumbers: ["TN46"] },
    { name: "KARUR ", regNumbers: ["TN47"] },
    { name: "SRIRANGAM ", regNumbers: ["TN48"] },
    { name: "Thanjavur ", regNumbers: ["TN49"] },
    { name: "Tiruvarur ", regNumbers: ["TN50"] },
    { name: "Nagapattinam ", regNumbers: ["TN51"] },
    { name: "SANKAGIRI ", regNumbers: ["TN52"] },
    { name: "SALEM (EAST) ", regNumbers: ["TN54"] },
    { name: "Pudukkottai ", regNumbers: ["TN55"] },
    { name: "PERUNDURAI ", regNumbers: ["TN56"] },
    { name: "Dindigul ", regNumbers: ["TN57"] },
    { name: "Madurai(South) ", regNumbers: ["TN58"] },
    { name: "Madurai (North) ", regNumbers: ["TN59"] },
    { name: "Theni ", regNumbers: ["TN60"] },
    { name: "ARIYALUR ", regNumbers: ["TN61"] },
    { name: "SIVAGANGAI ", regNumbers: ["TN63"] },
    { name: "Madurai (Central) ", regNumbers: ["TN64"] },
    { name: "RAMANATHAPURAM ", regNumbers: ["TN65"] },
    { name: "COIMBATORE (CENTRAL) ", regNumbers: ["TN66"] },
    { name: "VIRUDHUNAGAR ", regNumbers: ["TN67"] },
    { name: "Kumbakonam ", regNumbers: ["TN68"] },
    { name: "TUTICORIN ", regNumbers: ["TN69"] },
    { name: "HOSUR ", regNumbers: ["TN70"] },
    { name: "TIRUNELVELI ", regNumbers: ["TN72"] },
    { name: "Ranipet ", regNumbers: ["TN73"] },
    { name: "NAGERCOIL ", regNumbers: ["TN74"] },
    { name: "MARTHANDAM ", regNumbers: ["TN75"] },
    { name: "TENKASI ", regNumbers: ["TN76"] },
    { name: "ATTUR ", regNumbers: ["TN77"] },
    { name: "DHARAPURAM ", regNumbers: ["TN78"] },
    { name: "SANKARANKOVIL ", regNumbers: ["TN79"] },
    { name: "TRICHY (EAST) ", regNumbers: ["TN81"] },
    { name: "Mayiladuthurai ", regNumbers: ["TN82"] },
    { name: "Vaniyambadi ", regNumbers: ["TN83"] },
    { name: "Tirupattur ", regNumbers: ["TN83M"] },
    { name: "SRIVILLIPUTTUR ", regNumbers: ["TN84"] },
    { name: "Kundrathur ", regNumbers: ["TN85"] },
    { name: "ERODE WEST ", regNumbers: ["TN86"] },
    { name: "SRIPERUMBUDUR ", regNumbers: ["TN87"] },
    { name: "NAMAKKAL SOUTH ", regNumbers: ["TN88"] },
    { name: "SALEM (SOUTH) ", regNumbers: ["TN90"] },
    { name: "Chidambaram ", regNumbers: ["TN91"] },
    { name: "THIRUCHENDUR ", regNumbers: ["TN92"] },
    { name: "METTUR ", regNumbers: ["TN93"] },
    { name: "Palani ", regNumbers: ["TN94"] },
    { name: "SIVAKASI ", regNumbers: ["TN95"] },
    { name: "KOVILPATTI ", regNumbers: ["TN96"] },
    { name: "ARANI ", regNumbers: ["TN97"] },
    { name: "COIMBATORE (WEST) ", regNumbers: ["TN99"] },
    { name: "VALPARAI ", regNumbers: ["TN41W"] },
    { name: "THIRUTTANI ", regNumbers: ["TN20X"] },
    { name: "SULUR UO ", regNumbers: ["TN37Z"] }
  ];
  const filteredRTOs = rtoData.filter((rto) =>
    rto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = (rto) => {
    setSelectedRto(rto); // Set the selected RTO to show details
  };

  const handleClosePopup = () => {
    setSelectedRto(null); // Close the popup by resetting selected RTO
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tamil Nadu RTOs </Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by RTO Name..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Displaying filtered RTOs */}
      <FlatList
        data={filteredRTOs}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Popup to show RTO details */}
      {selectedRto && (
        <View style={styles.popup}>
          <Text style={styles.popupHeader}>{selectedRto.name}</Text>
          <Text style={styles.popupText}>Vehicle Registration Code: {selectedRto.regNumbers.join(", ")}</Text>
          <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6ddcc', // Light blue
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50, // To avoid overlapping with the status bar
  },
  header: {
    fontSize: 30,
    padding: 20,
    color: "#000000", // White text
    backgroundColor: "#d5dbdb", // Black background
    borderStyle: "solid",
    borderColor: "#edbb99", // Beige border
    borderWidth: 2, // Border width
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Space below the header
  },
  searchBar: {
    height: 38,
    color: "#000",
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 70,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    padding: 10,
    margin: 5,
    backgroundColor: "#000", // White background
    color: "#fff", // Blue text
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#fff", // Light green border
    borderWidth: 2, // Border width
    borderRadius: 10, // Rounded corners
  },
  popup: {
    position: 'absolute',
    top: '50%',
    left: '8%',
    right: '8%',
    backgroundColor: '#d5dbdb',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 5,
    zIndex: 1,
    color: "blue",
  },
  popupHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
  },
  popupText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },
  // closeButton: {
  //   margin: 8,
  //   backgroundColor: 'red',
  //   padding: 12,
  //  borderRadius: 10,
  //  fontSize: 50,
  // },
  closeButton: {
    margin: 10,
    backgroundColor: 'red',
    padding: 8,  // Reduced padding for a smaller button
    borderRadius: 20,  // Slightly smaller border radius for a tighter look
    fontSize: 30,  // Reduced font size for the button text
    color: 'white',  // To ensure the text is visible
    textAlign: 'center',  // Ensure text is centered
    justifyContent: 'center', // Ensure button content is centered
    alignItems: 'center',  // Center align content within the button
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

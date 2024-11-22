# Stonetekk Contact Picker App

The **Stonetekk Contact Picker App** simplifies the process of managing retailer orders for dealers in the stone management industry. Designed specifically for dealers interacting with retailers outside the Stonetekk ecosystem, the app leverages the **Contact Picker API** to streamline onboarding retailer details and enhance user experience.

---

## Use Case

### The Problem

1. Retailers who are not part of the Stonetekk ecosystem frequently place recurring stone orders with dealers.
2. Dealers previously had to manually fill out forms with retailer details such as name, address, and phone number, leading to frustration and inefficiency.
3. Existing autofill features were limited to the dealer’s saved addresses, offering little help for entering retailer information.

### The Solution

Using the **Contact Picker API**, the app enables dealers to:

1. Quickly import retailer details (name, phone number, address, and even profile pictures) directly from their phone's contact list.
2. Save retailer information in the app's centralized state (using Redux Toolkit) for the current session without permanently storing it on servers, ensuring privacy.
3. Add multiple retailers at once to a new order without repetitive form-filling.
4. Easily specify recurring monthly orders for those retailers.
5. Send orders with just a few clicks, and automatically:
   - Clear retailer details from the app to maintain privacy.
   - Email retailers with their order details, including delivery name and address.

This time-saving feature improves the dealer's workflow, providing a modernized approach to managing orders for retailers who are not yet onboarded onto Stonetekk.

---

## About the Contact Picker API

The **Contact Picker API** is a modern web standard that allows users to select contacts from their device's address book directly within a web application.

### Key Features:

- **Privacy-Focused**: Users grant explicit consent to share contact details, and the app cannot access the entire address book.
- **Efficient**: Simplifies importing contact details, eliminating manual data entry.
- **Compatibility**: Currently, the API is experimental and supported on select browsers (e.g., Chrome and Edge). Ensure your browser supports the API before use.

### Limitations:

- **Browser Support**: Not all browsers support the Contact Picker API, so fallback mechanisms may be necessary.
- **Mobile Devices**: Primarily designed for use on mobile devices where contacts are readily available.

Despite these limitations, the Contact Picker API is a game-changer for applications requiring contact selection, like this app.

---

## Contributing

We welcome contributions to improve the app!

1. Fork the repository and create a new branch for your feature.
2. Submit a pull request with detailed descriptions of your changes.

If you encounter issues or have suggestions, please open an issue in the repository.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

With the **Stonetekk Contact Picker App**, dealers can now manage retailer orders with unprecedented ease, paving the way for a more efficient and streamlined stone management process.

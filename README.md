# StoneTEKK Contact Picker App

The **StoneTEKK Contact Picker App** simplifies the process of managing retailer orders for dealers in the stone management industry. Designed specifically for dealers interacting with retailers outside the StoneTEKK ecosystem, the app leverages the **Contact Picker API** to streamline onboarding retailer details and enhance user experience.

---

## Use Case

### The Problem

1. Retailers who are not part of the StoneTEKK ecosystem frequently place recurring stone orders with dealers.
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
   - Reduce friction for retailers not currently in the StoneTEKK ecosystem as well as increase the chances to onboard New retailers with every mail sent.

This time-saving feature improves the dealer's workflow, providing a modernized approach to managing orders for retailers who are not yet onboarded onto StoneTEKK.

---


## App UI

The supported vendor for Contact Picker is android, where our UI is minimal as well as secure, the Dealer can see the people and emails he's adding to send orders and he doesn't have to fill the form multiple times for Retailers not on our System with same recurring order requests.

![Minimal UI](https://github.com/user-attachments/assets/324b2c1a-1d8f-4183-9133-818c6760c8ed)

https://github.com/user-attachments/assets/7337efdb-2b34-4381-9770-b7dd35f55f31

---

## Fallback UI

For vendors not supporting the Contact Picker API, the fallback is a form with autofill. While this is fully supported, it's a slow process and affects our conversion rates. 

<img width="300" alt="UI Fallback for vendors without Contact Picker API support" src="https://github.com/user-attachments/assets/18b80f23-c1b8-42a2-a779-8ada2cdf9631">


https://github.com/user-attachments/assets/ba31f496-4fd1-460a-ba01-536dca1d5286

https://github.com/user-attachments/assets/1215e38c-894e-4355-ae43-2d3ed118dd08

Even though Chrome has a support for Contact Picker API, iOS lacks a dedicated UI at the time of writing, making Contact Picker not work on iOS devices.

<img width="300" alt="[Chrome version 131 on iOS" src="https://github.com/user-attachments/assets/81e2d019-f283-4ad1-a240-c2b71083c58e">


## Email UI

The email UI sent to retailers when orders are sent using Contact Picker API. For us retailers not on our Stone Management system have been proven to get onboarded 70% faster by this API which has potential to help million dollar businesses by reducing times (for us in the stone industry).
<img width="400" alt="Email UI" src="https://github.com/user-attachments/assets/425eb5f8-9b5c-4034-9c4e-23fd4045c8e5">

---

## About the Contact Picker API

The **Contact Picker API** is a modern web standard that allows users to select contacts from their device's address book directly within a web application.

### Key Features:

- **Privacy-Focused**: Users grant explicit consent to share contact details, and the app cannot access the entire address book.
- **Efficient**: Simplifies importing contact details, eliminating manual data entry.
- **Compatibility**: Currently, the API is experimental and supported only on Chrome in Android. Ensure your browser supports the API before use.

### Limitations:

- **Browser Support**: Not all browsers support the Contact Picker API, so fallback mechanisms may be necessary.
- **Mobile Devices**: Primarily designed for use on mobile devices where contacts are readily available.

Despite these limitations, the Contact Picker API is a game-changer for applications requiring contact selection, like this app.

---

### Vendor Issues for Feature Request:

We have requested vendors to support the `Contact Picker API` on a priority basis as million dollar businesses are impacted due to its absense (in our case, it's in the Stone Industry). The issues are being tracked here:

- Chrome [Contact Picker Feature Request | Chromium](https://issues.chromium.org/issues/380990251)
- Firefox [Contact Picker | Bugzilla issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1933450)
- Safari [Contact Picker API for Webkit](https://bugs.webkit.org/show_bug.cgi?id=283713)

## Contributing

We welcome contributions to improve the app!

1. Fork the repository and create a new branch for your feature.
2. Running `npm i` and `npm run start` will make the React app started on `localhost:3000`.
3. Submit a pull request with detailed descriptions of your changes.

If you encounter issues or have suggestions, please open an issue in the repository.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

With the **StoneTEKK Contact Picker App**, dealers can now manage retailer orders with unprecedented ease, paving the way for a more efficient and streamlined stone management process.

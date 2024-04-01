//SPDX Liscence Identifire :MIT 
//pragma solidity ^0.8.0


contract PropertyRegistry {
    // Define property struct
    struct Property {
        address owner;
        string location;
        uint256 price;
        uint256 leaseDuration; // New parameter for lease duration
    }

    // Mapping of property IDs to Property struct
    mapping(uint256 => Property) public properties;

    // Event to log property purchase
    event PropertyPurchased(address indexed buyer, string location, uint256 price);

    // Event to log property rental
    event PropertyRented(address indexed tenant, string location, uint256 price, uint256 leaseDuration);

    // Function to record a property purchase
    function recordPropertyPurchase(string memory _location, uint256 _price) public {
        // Record property purchase transaction
        properties[block.timestamp] = Property(msg.sender, _location, _price, 0); // Lease duration set to 0 for purchases
        // Emit an event to log the purchase
        emit PropertyPurchased(msg.sender, _location, _price);
    }

    // Function to record a property rental
    function recordPropertyRental(string memory _location, uint256 _price, uint256 _leaseDuration) public {
        // Record property rental transaction
        properties[block.timestamp] = Property(msg.sender, _location, _price, _leaseDuration);
        // Emit an event to log the rental
        emit PropertyRented(msg.sender, _location, _price, _leaseDuration);
    }
}

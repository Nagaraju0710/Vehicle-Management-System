import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "../CSS/vehicle.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import "../CSS/vendor.css"



const Vendors = () => {
    const [vendors, setVendors] = useState([]);

    const fetchVendors = async () => {
        try {
          const response = await axios.get('https://real-cyan-ostrich-yoke.cyclic.app/vendor');
          setVendors(response.data);
        } catch (error) {
          console.error('Error fetching vendors:', error);
        }
      };


    const deleteVendor = async (id) => {
        try {
          await axios.delete(`https://real-cyan-ostrich-yoke.cyclic.app/vendor/delete/${id}`);
          // After deletion, fetch vendors again to update the list
          fetchVendors();
          alert('Vendor deleted successfully');
        } catch (error) {
          console.error('Error deleting vendor:', error);
        }
      };

      useEffect(() => {
        fetchVendors(); // Fetch vendors when the component mounts
      }, []);

    return (
        <div className='owlbody'>
            <h2 className='cardheader'>Vendors</h2>
            <div className='vendorcard'>
                    {vendors.map((vendor) => (
                        <div className='innervendorcard' key={vendor._id}>
                           <p>Name:  {vendor.name}</p> 
                       <p> Contact Person:  {vendor.contactPerson}</p>
                           <p>Email:  {vendor.email}</p>
                           <p>Phone:  {vendor.phone}</p>
                           <p>Address:   {vendor.address.street}, {vendor.address.city}, {vendor.address.state}, {vendor.address.postalCode}, {vendor.address.country}<br /></p>
                           <Button  colorScheme='red' onClick={() => deleteVendor(vendor._id)}>Delete</Button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Vendors
import { option } from "framer-motion/client";

export default{
     name: 'certificates', 
     title: 'Certificates & Awards', 
     type: 'document', icon: () => '🏆', 
     fields: [ 
        { 
            name: 'title', 
            title: 'Title', 
            type: 'string', 
        }, { 
            name: 'imageUrl', 
            title: 'Image URL', 
            type: 'image',
            options: {
                hotspots: true,
            }
        }, { 
            name: 'dateIssued', 
            title: 'Date Issued', 
            type: 'date', 
        }
    ], 
}
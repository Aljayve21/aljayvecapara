import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { AiFillEye } from 'react-icons/ai';
import './Certificates.scss';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);

    // fetch certificates data from Sanity
    useEffect(() => {
        const query = '*[_type == "certificates"]';
        client.fetch(query).then((data) => {
            setCertificates(data);
        });
    }, []);

    return (
        <>
            <div className="app__certificates">
                {/* Title hiwalay sa certificates list */}
                <h2 className="head-text">
                    <span>Certificates</span> & Awards
                </h2>

                {/* Certificates List */}
                <motion.div
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__certificates-portfolio"
                >
                    {certificates.map((certificate, index) => (
                        <div className="app__certificate-item app__flex" key={index}>
                            <div className="app__certificate-img app__flex">
                                <img src={urlFor(certificate.imageUrl)} alt={certificate.title} />

                                {/* Hover overlay like Work.jsx */}
                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: 'easeInOut',
                                        staggerChildren: 0.5,
                                    }}
                                    className="app__certificate-hover app__flex"
                                >
                                    <a href={urlFor(certificate.imageUrl)} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className="app__certificate-content app__flex">
                                <h4 className="bold-text">{certificate.title}</h4>
                                <p className="p-text">{certificate.issuedBy}</p>
                                <p className="p-text">
                                    {new Date(certificate.dateIssued).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>


        </>
    );
};

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
    'certificates',
    'app__whitebg',
);

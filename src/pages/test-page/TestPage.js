import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import useFetch from "../../hooks/useFetch";

export default function TestPage() {
    const { pageFade } = useGlobalContext().animations;
    const [state, setState] = useState({});
    const { preloader } = localData.images;

    const params = useParams();

    useEffect(() => {
        document.title = state.metaTitle || 'Global Management Consulting | Artax';
        document.description = state.metaDescription || 'Artax Consulting is your trusted partner for strategic management and digital transformation in an age of turbulence.'
    }, [state]);

    const { getPosts } = useFetch();

    const getConvertedData = (data)=>{
        const convertedData = {}
        data.table.rows.forEach((item,index)=>{
            const obj = {}
            obj.metaTitle = item.c[1]?.v
            obj.metaDescription = item.c[2]?.v
            obj.h1 = item.c[5]?.v
            obj.paragraph = item.c[6]?.v
            convertedData[item.c[0]?.v.toLowerCase()] = obj
        })
        setState(convertedData[params.slug])
    }

    useEffect(() => {
        getPosts((err, data) => {
            const tempData = JSON.parse(data.substr(47).slice(0,-2))
            console.log(tempData)
            // setState({ ...state, title: data[params.id].title, description: data[0].body });
          getConvertedData(tempData)
        });
    }, []);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            <main className="schedule-page">
                <section className="schedule">
                    <div className="container">
                        <div className="schedule-content">
                            {/* <img src={state.cover ? state.cover : preloader } alt=""  /> */}
                            {state.h1 ? (
                                <>
                                    <h1 className="display-3">{state.h1}</h1>
                                    <p className="description">{state.paragraph || 'null'}</p>
                                </>
                            ) : (
                                "loading..."
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}

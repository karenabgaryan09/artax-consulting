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
        document.title = state.documentTitle || 'Global Management Consulting | Artax';
    }, [state]);

    const { getPosts } = useFetch();

    const getConvertedData = (data)=>{
        const convertedData = {}
        data.table.rows.forEach((item,index)=>{
            const obj = {}
            obj.documentTitle = item.c[1]?.v
            obj.title = item.c[2]?.v
            obj.description = item.c[3]?.v
            obj.number = item.c[4]?.v
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
                            {state.title ? (
                                <>
                                    <h1 className="display-3">{state.title}</h1>
                                    <p className="description">{state.description}</p>
                                    <p className="description">{state.number || 'null'}</p>
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

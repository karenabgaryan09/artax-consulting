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
        console.log(params.id, " id");
    }, []);

    const { getPosts, getProducts } = useFetch();

    useEffect(() => {
        getProducts((err, data) => {
            setTimeout(() => {
                getPosts((err, data) => {
                    setState({ ...state, title: data[params.id].title, description: data[0].body });
                });
            }, 1000);
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
                                </>
                            ) : (
                                "parameter should be number"
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

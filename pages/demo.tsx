import { GetServerSideProps } from "next";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable, resetServerContext } from 'react-beautiful-dnd';
import $ from 'jquery';
import ContentEditable from 'react-contenteditable'
import { Icon } from '@iconify/react';

//styles
import styles from './../styles/demo.module.scss';
import buttons from './../styles/components/buttons.module.scss';
import forms from './../styles/components/forms.module.scss';

//components
import Header from "../components/demo/header";
import EmptyList from "../components/demo/emptyList";

interface ListProps {
    id: string;
    content: string;
    title: string;
}

interface PositionProps {
    x: number;
    y: number;
}

export default function Demo() {
    const [list, setList] = useState<Array<ListProps>>([]);
    const [dataSearch, setDataSearch] = useState<Array<ListProps>>([]);
    const [isBrowser, setIsBrowser] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const searchNotes = useCallback((valueInput) => {
        setValueSearch(valueInput);
        setIsSearch(valueInput ? true : false);
        const result = list.filter(opt => opt.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(valueInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
        setDataSearch(result)
        console.log(result)
    }, [list]);

    // a little function to help us with reordering the result
    const reorder = useCallback((list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }, []);

    const onDragEnd = useCallback((result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items: any[] = reorder(
            list,
            result.source.index,
            result.destination.index
        );

        console.log('result -> ', result);

        setList(items);
        $('#movableScroll').stop()


        $(document).ready(function () {
            $(`#card-${result.draggableId}`).focus();
        });

    }, [list, reorder]);

    const createNewCard = useCallback(() => {
        setIsSearch(false)
        setValueSearch('')
        let newList = {
            id: (list.length + 1).toString(),
            content: `Item ${list.length + 1}`,
            title: `List ${list.length + 1}`
        };

        setList((prevList) => [...prevList, newList]);


        $(document).ready(function () {
            $(`#card-${list.length + 1}`).focus();
        });

    }, [list])

    const editCard = useCallback((type, value, text) => {

        value[type] = text.target.value;

        console.log('text -> ', text.target.value);
        setList(list.map(item => (item.id === value.id ? value : item)))
    }, [list])

    const deleteCard = useCallback((id) => {
        setList(list.filter(item => item.id !== id));
    }, [list])

    const getItemStyle = useCallback((isDragging: any, draggableStyle: any, snapshot: any) => {

        console.log('snapshot.isDropAnimating -> ', snapshot.isDropAnimating)

        if (!snapshot.isDropAnimating) {
            return {
                // change background colour if dragging
                background: isDragging ? '#FFC05C' : '#FFAF31',

                // styles we need to apply on draggables
                ...draggableStyle,
            };
        }

        const translate = `translate(${snapshot.dropAnimation.moveTo.x}px, ${snapshot.dropAnimation.moveTo.y}px)`;

        const rotate = 'rotate(1.5turn)';

        return {
            // change background colour if dragging
            background: isDragging ? '#FFC05C' : '#FFAF31',

            transitionDuration: `0.500s`,
            transform: `${translate} ${rotate}`,
            // styles we need to apply on draggables
            ...draggableStyle,
        }
    }, []);

    const onClickCapture = (e: any) => {
        if (e.defaultPrevented) {
            return;
        }
        if (e.currentTarget !== e.target && e.target.tabIndex >= 0) {
            e.target.focus();
        } else {
            e.currentTarget.focus();
        }
    }

    useEffect(() => {

        setIsBrowser(process.browser);
    }, []);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}  >
                    <Header>
                        <button className={buttons.primary} type="button" onClick={createNewCard}><Icon width={20} icon="bx:plus" /> Adicionar Novo Card</button>
                        <input value={valueSearch} onChange={(e) => searchNotes(e.target.value)} className={forms.inputSearch} type="search" placeholder="Search" />
                    </Header>

                    {
                        list.length === 0 ?
                            <EmptyList>
                                <button className={buttons.primary} type="button" onClick={createNewCard}>Adicionar Novo Card</button>
                            </EmptyList>

                            : <></>
                    }

                    {
                        isSearch && dataSearch.length === 0 ?
                            <EmptyList description="Refaça a pesquisa ou limpe a pesquisa." title='Nenhum resultado encontrado' /> : <></>
                    }

                    {list.length > 0 && isBrowser ? <>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable" direction="horizontal">
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            onScroll={() => {
                                                $('#movableScroll').on('wheel', function (ev: any) {
                                                    let y = parseInt(ev.originalEvent.deltaY);
                                                    if (y)
                                                        this.scrollLeft += y / 4;
                                                });

                                            }}
                                            id="movableScroll"
                                            className={styles.contentList}
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {(isSearch ? dataSearch : list).map((item: { id: any | null | undefined; title: any; content: string; }, index: number) => {



                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot: any) => {

                                                            console.log('provided -> ', provided)
                                                            return (
                                                                <div
                                                                    id={`card-${item.id}`}
                                                                    className={styles.contentListItem}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style,
                                                                        snapshot
                                                                    )}

                                                                >

                                                                    <div className={styles.headerCard}>

                                                                    </div>
                                                                    <div className={styles.mainCard}>
                                                                        <textarea
                                                                            className={styles.title}
                                                                            placeholder="Título"
                                                                            dir="auto"
                                                                            spellCheck="false"
                                                                            maxLength={540}
                                                                            title="titulo card"
                                                                            defaultValue={item.title}
                                                                            onChange={(e) => {
                                                                                if (e.target.value === "") {
                                                                                    e.target.style.height = '38px';
                                                                                } else {
                                                                                    e.target.style.height = e.target.scrollHeight + 'px';
                                                                                }
                                                                                editCard('title', item, e)
                                                                            }} />

                                                                        <textarea
                                                                            className={styles.description}
                                                                            placeholder="Description"
                                                                            dir="auto"
                                                                            spellCheck="false"
                                                                            maxLength={540}
                                                                            title="Descrição do card"
                                                                            defaultValue={item.content}
                                                                            onChange={(e) => {
                                                                                if (e.target.value === "") {
                                                                                    e.target.style.height = '38px';
                                                                                } else {
                                                                                    e.target.style.height = e.target.scrollHeight + 'px';
                                                                                }

                                                                                editCard('content', item, e)
                                                                            }} />
                                                                    </div>

                                                                    <div className={styles.itemFooter}>
                                                                        <button onClick={() => deleteCard(item.id)} title="Deletar nota" type="button" ><Icon color="#1e1f23" width={20} icon="gg:trash" /></button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </div>

                                    )
                                }}

                            </Droppable>
                        </DragDropContext>
                    </> : null}
                </div>
            </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

    return { props: { data: [] } }

}
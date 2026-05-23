'use client';

import { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Kanban, ArrowLeft, Plus, MoreHorizontal, Trash2, X, Check, MoreVertical } from 'lucide-react';
import Link from 'next/link';

interface Task {
    id: string;
    content: string;
    tag: string;
    tagColor: string;
}

interface Column {
    name: string;
    items: Task[];
    color: string;
    headerColor: string;
}

interface Columns {
    [key: string]: Column;
}

const initialData: Columns = {
    todo: {
        name: 'To Do',
        color: 'bg-slate-50',
        headerColor: 'border-l-4 border-l-slate-400',
        items: [
            { id: '1', content: 'Design System Audit', tag: 'Design', tagColor: 'bg-pink-100 text-pink-700' },
            { id: '2', content: 'Competitor Analysis', tag: 'Research', tagColor: 'bg-blue-100 text-blue-700' },
        ],
    },
    inProgress: {
        name: 'In Progress',
        color: 'bg-blue-50/50',
        headerColor: 'border-l-4 border-l-blue-500',
        items: [
            { id: '3', content: 'Implement Authentication', tag: 'Dev', tagColor: 'bg-purple-100 text-purple-700' },
        ],
    },
    done: {
        name: 'Done',
        color: 'bg-emerald-50/50',
        headerColor: 'border-l-4 border-l-emerald-500',
        items: [
            { id: '4', content: 'Legacy Code Migration', tag: 'Refactor', tagColor: 'bg-orange-100 text-orange-700' },
            { id: '5', content: 'Client Meeting', tag: 'Business', tagColor: 'bg-slate-200 text-slate-700' },
        ],
    },
};

export default function KanbanBoard() {
    const [columns, setColumns] = useState<Columns>(initialData);
    const [addingTaskTo, setAddingTaskTo] = useState<string | null>(null);
    const [newTaskContent, setNewTaskContent] = useState('');
    const [isAddingColumn, setIsAddingColumn] = useState(false);
    const [newColumnName, setNewColumnName] = useState('');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [newTaskTag, setNewTaskTag] = useState('Feature');

    const TAGS = {
        'Feature': 'bg-purple-100 text-purple-700',
        'Bug': 'bg-rose-100 text-rose-700',
        'Design': 'bg-pink-100 text-pink-700',
        'Urgent': 'bg-orange-100 text-orange-700',
    };

    // Close menus on click outside
    useEffect(() => {
        const handleClick = () => setActiveMenu(null);
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceColumn, items: sourceItems },
                [destination.droppableId]: { ...destColumn, items: destItems },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: { ...column, items: copiedItems },
            });
        }
    };

    const addTask = (columnId: string) => {
        if (!newTaskContent.trim()) return;
        const newTask: Task = {
            id: Math.random().toString(36).substr(2, 9),
            content: newTaskContent,
            tag: newTaskTag,
            tagColor: TAGS[newTaskTag as keyof typeof TAGS],
        };

        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: [...columns[columnId].items, newTask],
            },
        });
        setNewTaskContent('');
        setNewTaskTag('Feature');
        setAddingTaskTo(null);
    };

    const addColumn = () => {
        if (!newColumnName.trim()) return;
        const id = newColumnName.toLowerCase().replace(/\s+/g, '-');
        setColumns({
            ...columns,
            [id]: {
                name: newColumnName,
                items: [],
                color: 'bg-slate-50',
                headerColor: 'border-l-4 border-l-slate-400',
            },
        });
        setNewColumnName('');
        setIsAddingColumn(false);
    };

    const deleteColumn = (columnId: string) => {
        const newColumns = { ...columns };
        delete newColumns[columnId];
        setColumns(newColumns);
    };

    return (
        <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-[1600px] mx-auto h-[85vh] flex flex-col">
                <div className="fixed top-24 left-8 z-50">
                    <Link href="/demos" className="flex items-center gap-2 text-slate-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 hover:bg-white hover:text-black hover:border-slate-300 shadow-lg">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Labs
                    </Link>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">

                        <div>
                            <h1 className="text-2xl font-black flex items-center gap-3 text-slate-900 tracking-tight">
                                <div className="p-2 bg-amber-500 rounded-lg text-white shadow-lg shadow-amber-500/30">
                                    <Kanban className="w-6 h-6" />
                                </div>
                                Agile Kanban
                            </h1>
                        </div>
                    </div>

                    {/* Add Column Button */}
                    {!isAddingColumn ? (
                        <button
                            onClick={() => setIsAddingColumn(true)}
                            className="px-5 py-2.5 bg-slate-900 hover:bg-black text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-bold text-sm"
                        >
                            <Plus className="w-4 h-4" /> New List
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-right-4">
                            <input
                                autoFocus
                                type="text"
                                className="px-3 py-1 outline-none text-slate-700 w-40 font-medium"
                                placeholder="Column Name..."
                                value={newColumnName}
                                onChange={(e) => setNewColumnName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addColumn()}
                            />
                            <button onClick={addColumn} className="p-1 hover:bg-emerald-100 rounded-lg text-emerald-600"><Check className="w-4 h-4" /></button>
                            <button onClick={() => setIsAddingColumn(false)} className="p-1 hover:bg-rose-100 rounded-lg text-rose-600"><X className="w-4 h-4" /></button>
                        </div>
                    )}
                </div>

                {/* Board Area */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex flex-row gap-6 h-full overflow-x-auto pb-4 items-start">
                        {Object.entries(columns).map(([columnId, column]) => (
                            <div
                                key={columnId}
                                className={`flex-shrink-0 w-[350px] flex flex-col max-h-full rounded-2xl ${column.color} border border-slate-200 shadow-sm`}
                            >
                                {/* Column Header */}
                                <div className={`p-4 flex items-center justify-between rounded-t-2xl bg-white/50 backdrop-blur-sm ${column.headerColor}`}>
                                    <h2 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                        {column.name}
                                        <span className="bg-slate-200 px-2 py-0.5 rounded-md text-xs text-slate-600 font-mono">
                                            {column.items.length}
                                        </span>
                                    </h2>
                                    <div className="relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveMenu(activeMenu === columnId ? null : columnId);
                                            }}
                                            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-white/50 rounded-lg transition-colors"
                                        >
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeMenu === columnId && (
                                            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 p-1 z-50 animate-in fade-in zoom-in-95">
                                                <button
                                                    onClick={() => deleteColumn(columnId)}
                                                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                                                >
                                                    <Trash2 className="w-4 h-4" /> Delete Column
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Droppable Area */}
                                <Droppable droppableId={columnId}>
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={`flex-1 p-3 space-y-3 overflow-y-auto min-h-[150px] transition-colors rounded-b-2xl ${snapshot.isDraggingOver ? 'bg-slate-900/5' : ''}`}
                                        >
                                            {column.items.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                zIndex: snapshot.isDragging ? 9999 : 'auto',
                                                            }}
                                                            className={`bg-white p-4 rounded-xl border border-slate-100 group relative select-none ${snapshot.isDragging
                                                                ? 'shadow-2xl ring-4 ring-amber-400/20 rotate-2 scale-105 !z-[9999]'
                                                                : 'hover:shadow-lg shadow-sm hover:-translate-y-1'
                                                                } transition-all duration-200`}
                                                        >
                                                            <div className="flex justify-between items-start mb-3">
                                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.tagColor}`}>
                                                                    {item.tag}
                                                                </span>
                                                            </div>
                                                            <p className="text-sm font-semibold text-slate-700 leading-snug">{item.content}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}

                                            {/* Add Task Input/Button */}
                                            {addingTaskTo === columnId ? (
                                                <div className="bg-white p-3 rounded-xl shadow-lg border-2 border-amber-400 animate-in fade-in zoom-in-95">
                                                    <textarea
                                                        autoFocus
                                                        className="w-full text-sm text-slate-700 outline-none resize-none placeholder:text-slate-400 bg-transparent font-medium mb-3"
                                                        placeholder="What needs to be done?"
                                                        rows={2}
                                                        value={newTaskContent}
                                                        onChange={(e) => setNewTaskContent(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                                e.preventDefault();
                                                                addTask(columnId);
                                                            }
                                                        }}
                                                    />

                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {Object.keys(TAGS).map(tag => (
                                                            <button
                                                                key={tag}
                                                                onClick={() => setNewTaskTag(tag)}
                                                                className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border-2 transition-all ${newTaskTag === tag
                                                                    ? `${TAGS[tag as keyof typeof TAGS]} border-current`
                                                                    : 'bg-slate-50 text-slate-400 border-transparent hover:bg-slate-100'
                                                                    }`}
                                                            >
                                                                {tag}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => setAddingTaskTo(null)} className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg">
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                        <button onClick={() => addTask(columnId)} className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors">
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setAddingTaskTo(columnId)}
                                                    className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-xl transition-colors border-2 border-dashed border-slate-300/50 hover:border-slate-300"
                                                >
                                                    <Plus className="w-4 h-4" /> Add Task
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        ))}

                        {/* Guide for empty state */}
                        {Object.keys(columns).length === 0 && (
                            <div className="flex flex-col items-center justify-center w-full h-full text-slate-400 opacity-50 border-2 border-dashed border-slate-300 rounded-3xl m-4">
                                <Kanban className="w-16 h-16 mb-4" />
                                <p className="font-medium">No columns yet. Create one to get started.</p>
                            </div>
                        )}
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
}

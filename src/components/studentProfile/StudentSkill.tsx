"use client";
import React, { useEffect, useState } from "react";
import SelectSkill from "../skills/SelectSkill";
import ListSkill from "../skills/ListStudentSkill";


const StudentSkill = () => {
    //service
    const [reload,setReload] = useState(false);

    

    return (
        <>
            {/* Yetenek seçme ve kaydetme bölümü */}
            <div className="skills-selection-area">
                <SelectSkill reload={reload} setReload={setReload}/>
            </div>

            {/* Yetenek listesi tablosu */}
            <div className="skills-component">
                <table className="skills-table">
                    <thead>
                        <tr>
                            <th>Yetenek Adı</th>
                            <th style={{ width: '100px', textAlign: 'right' }}></th>
                        </tr>
                    </thead>
                    <ListSkill reload={reload} setReload={setReload}/>
                </table>
            </div>
        </>
    );
};
export default StudentSkill;
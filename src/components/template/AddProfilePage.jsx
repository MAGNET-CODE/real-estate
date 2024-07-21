"use client";

import React, { useState } from 'react'
import TextInput from '@/module/TextInput';
import { Toaster } from 'react-hot-toast';
import styles from "@/template/AddProfilePage.module.css";
import RadioList from '@/module/RadioList';
import TextList from '@/module/TextList';

function AddProfilePage() {
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });
      const submitHandler = (e) => {
        console.log(profileData)
      }
  return (
    <div className={styles.container}>
        <h3>ثبت آگهی</h3>
        <TextInput
            title="عنوان آگهی"
            name="title"
            profileData={profileData}
            setProfileData={setProfileData}
        />
        <TextInput
            title="توضیحات"
            name="description"
            profileData={profileData}
            setProfileData={setProfileData}
            textarea={true}
        />
        <TextInput
            title="آدرس"
            name="location"
            profileData={profileData}
            setProfileData={setProfileData}
        />
        <TextInput
            title="شماره تماس"
            name="phone"
            profileData={profileData}
            setProfileData={setProfileData}
        />
        <TextInput
            title="قیمت(تومان)"
            name="price"
            profileData={profileData}
            setProfileData={setProfileData}
        />
        <TextInput
            title="بنگاه"
            name="realState"
            profileData={profileData}
            setProfileData={setProfileData}
        />
        <RadioList profileData={profileData} setProfileData={setProfileData} />
        <TextList
            title="امکانات رفاهی"
            profileData={profileData}
            setProfileData={setProfileData}
            type="amenities"
        />
        <TextList
            title="قوانین"
            profileData={profileData}
            setProfileData={setProfileData}
            type="rules"
        />
        <button className={styles.submit} onClick={submitHandler}>
            ثبت آگهی
        </button>
        <Toaster />
    </div>
  )
}

export default AddProfilePage
"use client";

import React, { useEffect, useState } from 'react'
import TextInput from '@/module/TextInput';
import toast, { Toaster } from 'react-hot-toast';
import styles from "@/template/AddProfilePage.module.css";
import RadioList from '@/module/RadioList';
import TextList from '@/module/TextList';
import CustomDatePicker from '@/module/CustomDatePicker';
import { useRouter } from 'next/navigation';
import Loader from '@/module/Loader';

function AddProfilePage({ data }) {
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

      const [loading, setLoading] = useState(false);

      useEffect(() => {
        if (data) setProfileData(data);
      }, []);

      const router = useRouter();

      const submitHandler = async () => {
        setLoading(true);
        const res = await fetch("/api/profile", {
          method: "POST",
          body: JSON.stringify(profileData),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        setLoading(false);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          router.refresh();
        }
      };
      
  return (
    <div className={styles.container}>
        <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
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
        <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
        {loading ? (
        <Loader />
            ) : data ? (
            <button className={styles.submit} onClick={editHandler}>
            ویرایش آگهی
            </button>
            ) : (
            <button className={styles.submit} onClick={submitHandler}>
            ثبت آگهی
            </button>
        )}
        <Toaster />
    </div>
  )
}

export default AddProfilePage
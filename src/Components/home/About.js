import React from "react";

const About = () => {
  return (
    <>
      <div style={{ margin: " 20px 200px" }}>
        <h3 style={{ textAlign: "center" }}>About</h3>
        <p style={{ textAlign: "justify" }}>
          Medicare is a grassroots organisation, established today as a 200
          bedded super specialty hospital, situated away from the city crowd,
          yet easily accessible, in a serene atmosphere, surrounded by lush
          green paddy fields, hillocks and rivers – a unique healthcare
          destination, offering subsidised medical care of exceptional quality,
          alongside comprehensive and integrated facilities. A team of dedicated
          doctors in all major disciplines, paramedical staff and healthcare
          professionals work round the clock, attending to all patients with the
          utmost care, at extremely affordable costs. Equipped with cutting edge
          research, the latest technology, clinical experts and modern medical
          equipment, Thangam is a prominent player in the hospital industry.
        </p>
      </div>
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?w=996&t=st=1711347548~exp=1711348148~hmac=fbf08ce1b8ad0961c9fb180e5c59e0995d73ab673fac34e5fbeeb196848ae391"
          alt="img"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ margin: " 20px 200px" }} id="departments">
        <h3 style={{ textAlign: "center" }}>Departments</h3>
        <p style={{ textAlign: "justify" }}>
          The hospital has set up multiple centers of excellence in specialities
          which include Accident & Trauma, Cardiology, Critical Care,
          Dermatology, ENT, Gastroenterology, General Surgery including
          Laparoscopic Surgery, General Medicine & Diabetology, Gynaecology,
          Infertility & Reproductive Medicine, Neurology, Nephrology, Oncology,
          Ophthalmology Paediatrics & Neonatalogy, Pulmonology, Pain &
          Palliative unit attached to Oncology, Radiology & Imaging, and Urology
          to ensure that both diagnosis as well as treatment. Future plans
          include an Infertility Lab with facilities for ICSI, a Cardiac Surgery
          Unit, a Neurosurgical Unit, Installation of Holmium LASER for painless
          treatment of kidney stones, ureteric stones and prostate enlargement.
          Above all else, this is an organisation that is looking to give back
          to the community. Here at Thangam, we are driven by the larger purpose
          of making a difference, even as we go about the business, of saving
          lives.
        </p>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2137.jpg?w=1060&t=st=1711347693~exp=1711348293~hmac=0b6a2a692e4e09abc7ab158f58a8344c556a2850ed3b9a10ed0f2cb065b099d5"
          alt="img"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default About;

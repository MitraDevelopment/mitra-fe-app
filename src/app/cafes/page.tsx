"use client";

import React from "react";
import Card from "@/components/common/Card";
import { ICafe } from "@/modules/types/ICafe";
import mockData from "@/modules/services/Cafes";

function CafesPage() {
  return (
    <div className="relative">
      {/* Ana scroll container */}
      <div className="flex overflow-x-auto no-scrollbar gap-6 p-6 snap-x snap-mandatory">
        {/* Kartların container'ı */}
        <div className="flex gap-6">
          {mockData.map((cafe) => (
            <div key={cafe.id} className="w-[300px] flex-shrink-0 snap-center">
              <Card
                title={cafe.name}
                description={cafe.description}
                imageUrl={cafe.image}
                category={cafe.type}
                onClick={() => {
                  console.log(`Cafe ${cafe.id} seçildi`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CafesPage;

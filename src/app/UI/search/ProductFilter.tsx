"use client";

import {  useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

type Filter = {
  id: string;
  category: string;
  label: string;
}

/**Usdo de ejemplo para mostrar el uso de la librería */
const filters_old: Filter[] = [
  { id: "category-electronics", category: "Categoría", label: "Electrónica" },
  { id: "category-clothing", category: "Categoría", label: "Ropa" },
  { id: "category-books", category: "Categoría", label: "Libros" },
  { id: "price-0-50", category: "Precio", label: "$0 - $50" },
  { id: "price-50-100", category: "Precio", label: "$50 - $100" },
  { id: "price-100-plus", category: "Precio", label: "$100+" },
 /*  { id: "brand-apple", category: "Marca", label: "Apple" },
  { id: "brand-samsung", category: "Marca", label: "Samsung" },
  { id: "brand-sony", category: "Marca", label: "Sony" }, */
  { id: "rating-4-plus", category: "Calificación", label: "4★ y más" },
  { id: "rating-3-plus", category: "Calificación", label: "3★ y más" },
  { id: "rating-2-plus", category: "Calificación", label: "2★ y más" },
]



export default function Component({brandList = [], categoryList}: {brandList: any[], categoryList: string[]}) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  /* LLena los filtros de marca */
  const filters: Filter[] = [];
  if (brandList){
    const filtersBrand = brandList.map(brand => ({
      id: brand._id,
      category: "Marca",
      label: `${brand._id} (${brand.count})`
    }))
    filters.push(...filtersBrand);
  }
  /** Llena los filtros de categoría */
  if (categoryList){
    const filtersCategory = categoryList.map(category => ({
      id: category,
      category: "Categoría",
      label: category
    }))
    filters.push(...filtersCategory)
  }

  const applyFilters = (newFilters: string[]) => {
    const filtersToApply = filters.filter(filter => newFilters.includes(filter.id))
    const filterBrand = filtersToApply.filter(filter => filter.category === "Marca");
    /* const filterCategory = filtersToApply.filter(filter => filter.category === "Categoría");
    console.log(filterCategory); */
    let param = null;
    if (filterBrand.length > 0){
      param = `?providerName=${filterBrand.map(filter => filter.id).join('|')}`;
    }
    const keword = searchParams.get('keword');
    if (keword) {
      param = param ? `${param}&keword=${keword}` : `?keword=${keword}`;
    }
    if (param) {
      router.push(param);
    } else {
      router.push('/dashboard/search');
    }
  }


  const toggleFilter = (filterId: string) => {
    const newFilters = () => {
      if (selectedFilters.includes(filterId)) {
        return selectedFilters.filter(id => id !== filterId)
      } 
      return [...selectedFilters, filterId]
    }
    const filterList = newFilters();
    setSelectedFilters(filterList);
    applyFilters(filterList);
  }

  const removeFilter = (filterId: string) => {
  
    const filterList = selectedFilters.filter(id => id !== filterId);
    setSelectedFilters(filterList);
    applyFilters(filterList);
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Filtros de Producto</h2>
      
      {/* Resumen de filtros seleccionados */}
      <div className="mb-4 flex flex-wrap gap-2">
        {selectedFilters.map(filterId => {
          const filter = filters.find(f => f.id === filterId)
          return filter ? (
            <Badge key={filterId} variant="secondary" className="px-2 py-1">
              {filter.label}
              <button 
                onClick={() => removeFilter(filterId)}
                className="ml-2 hover:text-destructive"
                aria-label={`Remover filtro ${filter.label}`}
              >
                <X size={14} />
              </button>
            </Badge>
          ) : null
        })}
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filters">
          <AccordionTrigger>Mostrar todos los filtros</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[/* "Categoría", "Precio" */, "Marca"/* , "Calificación" */].map(category => (
                <div key={category} className="border rounded-lg p-4 bg-slate-50">
                  <h3 className="font-semibold mb-2">{category}</h3>
                  <div className="space-y-2">
                    {filters
                      .filter(filter => filter.category === category)
                      .map(filter => (
                        <div key={filter.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={filter.id} 
                            checked={selectedFilters.includes(filter.id)}
                            onCheckedChange={() => toggleFilter(filter.id)}
                          />
                          <Label htmlFor={filter.id}>{filter.label}</Label>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
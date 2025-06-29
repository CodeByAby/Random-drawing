import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RiSparkling2Line, RiPaletteLine, RiLayoutGridLine, RiLightbulbFlashLine } from "react-icons/ri";

interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

interface Style {
  id: string;
  name: string;
}

interface DifficultyLevel {
  id: string;
  name: string;
}

const categories: Category[] = [
  {
    id: "animals",
    name: "Animals",
    subcategories: ["Wild Animals", "Pets", "Sea Creatures", "Birds", "Insects", "Mythical Creatures"]
  },
  {
    id: "people",
    name: "People",
    subcategories: ["Portraits", "Full Body", "Groups", "Characters", "Fantasy", "Historical"]
  },
  {
    id: "landscapes",
    name: "Landscapes",
    subcategories: ["Mountains", "Forests", "Beaches", "Cities", "Fantasy", "Space"]
  },
  {
    id: "objects",
    name: "Objects",
    subcategories: ["Food", "Technology", "Vehicles", "Everyday Items", "Plants", "Architecture"]
  },
  {
    id: "abstract",
    name: "Abstract",
    subcategories: ["Geometric", "Organic", "Surreal", "Minimalist", "Patterns", "Textures"]
  }
];

const styles: Style[] = [
  { id: "cute", name: "Cute" },
  { id: "realistic", name: "Realistic" },
  { id: "cartoon", name: "Cartoon" },
  { id: "anime", name: "Anime" },
  { id: "pop-art", name: "Pop Art" },
  { id: "sketch", name: "Sketch" },
  { id: "watercolor", name: "Watercolor" },
  { id: "minimalist", name: "Minimalist" }
];

const difficultyLevels: DifficultyLevel[] = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" }
];

// Sample drawing ideas by category
const drawingIdeas = {
  animals: [
    "A fox sleeping in a meadow",
    "A curious cat peeking around a corner",
    "A majestic eagle soaring over mountains",
    "A group of playful dolphins in the ocean",
    "A peaceful sloth hanging from a tree branch",
    "A colorful parrot perched on a tropical fruit"
  ],
  people: [
    "An elderly person with a story to tell",
    "A child discovering something for the first time",
    "A dancer in mid-movement",
    "A hero character with unique powers",
    "A person experiencing a strong emotion",
    "A group of friends enjoying time together"
  ],
  landscapes: [
    "A misty mountain range at sunrise",
    "A secret garden with magical elements",
    "A cozy cabin in a snowy forest",
    "A futuristic cityscape at night",
    "An underwater coral reef kingdom",
    "A cliff overlooking a dramatic ocean view"
  ],
  objects: [
    "A collection of vintage items telling a story",
    "Food that looks too delicious to eat",
    "A steampunk-inspired machine",
    "Plants growing in unusual places",
    "A magical artifact with special powers",
    "An ordinary object with an extraordinary twist"
  ],
  abstract: [
    "Emotions represented through color and shapes",
    "A visual representation of your favorite music",
    "A dream-like scene mixing reality and fantasy",
    "Geometric patterns inspired by nature",
    "A visual metaphor for personal growth",
    "Abstract representation of the four seasons"
  ]
};

export default async function RandomDrawingIdeasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("RandomDrawingIdeas");

  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <RiLightbulbFlashLine className="text-primary h-5 w-5" />
                <CardTitle>{t("idea_generator_title")}</CardTitle>
              </div>
              <CardDescription>
                {t("idea_generator_description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">{t("category_label")}</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder={t("category_placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="style">{t("style_label")}</Label>
                    <Select>
                      <SelectTrigger id="style">
                        <SelectValue placeholder={t("style_placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {styles.map((style) => (
                          <SelectItem key={style.id} value={style.id}>
                            {style.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">{t("difficulty_label")}</Label>
                    <Select>
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder={t("difficulty_placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultyLevels.map((level) => (
                          <SelectItem key={level.id} value={level.id}>
                            {level.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="gap-2">
                  <RiSparkling2Line className="h-5 w-5" />
                  {t("generate_button")}
                </Button>
              </div>

              <div className="bg-muted rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{t("your_idea")}</h3>
                <p className="text-xl mb-4">
                  {t("example_idea")}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Animals</Badge>
                  <Badge variant="secondary">Cute</Badge>
                  <Badge variant="secondary">Beginner</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 items-start">
              <p className="text-sm text-muted-foreground">{t("new_ideas_tip")}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  {t("save_idea_button")}
                </Button>
                <Button variant="outline" size="sm">
                  {t("share_idea_button")}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <RiPaletteLine className="text-primary h-5 w-5" />
                <CardTitle>{t("tips_title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">{t("tips_section_1_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("tips_section_1_content")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t("tips_section_2_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("tips_section_2_content")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t("tips_section_3_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("tips_section_3_content")}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t("tips_section_4_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("tips_section_4_content")}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t("tutorials_button")}
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <RiLayoutGridLine className="text-primary h-5 w-5" />
                <CardTitle>{t("popular_categories_title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Button key={category.id} variant="outline" className="justify-start">
                    {category.name}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full">
                {t("view_all_categories_button")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">{t("inspiration_gallery_title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <img 
                  src={`/imgs/showcases/${i}.png`} 
                  alt={t("gallery_image_alt", { number: i })}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium">{t("gallery_item_title", { number: i })}</h3>
                <p className="text-sm text-muted-foreground">{t("gallery_item_artist", { number: i })}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">{t("view_more_button")}</Button>
        </div>
      </div>
    </div>
  );
} 

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SlideWrapper = ({ children, active }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
      style={{ display: active ? "block" : "none" }}
    >
      {children}
    </div>
  );
};

const AnimatedItem = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 translate-y-4 animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards"
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="py-6 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <h1 className="text-xl uppercase tracking-wider font-light">NOBIAS TECHNOLOGIES</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Слайд 1 - Дорожная карта */}
          <SlideWrapper active={currentSlide === 0}>
            <Card className="overflow-hidden bg-black border border-neutral-800 rounded-none shadow-lg p-8 md:p-16">
              <AnimatedItem delay={100}>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16 uppercase">
                  Дорожная карта
                </h2>
              </AnimatedItem>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
                <div className="md:col-span-3 absolute left-0 right-0 top-1/3 h-px bg-neutral-800"></div>
                
                <AnimatedItem delay={300}>
                  <div className="flex flex-col relative pb-16">
                    <div className="rounded-full w-3 h-3 border border-white mb-6 mx-auto"></div>
                    <span className="text-sm text-neutral-400 uppercase tracking-widest mb-2">2025</span>
                    <h3 className="text-xl font-light uppercase tracking-wide mb-2">Масштабирование производства</h3>
                    <p className="text-sm text-neutral-400">Доработка линейки реагентов</p>
                  </div>
                </AnimatedItem>
                
                <AnimatedItem delay={400}>
                  <div className="flex flex-col relative pb-16">
                    <div className="rounded-full w-3 h-3 border border-white mb-6 mx-auto"></div>
                    <span className="text-sm text-neutral-400 uppercase tracking-widest mb-2">2026-2027</span>
                    <h3 className="text-xl font-light uppercase tracking-wide mb-2">Расширение и глобализация</h3>
                    <p className="text-sm text-neutral-400">Разработка нутрицевтиков. Создание научных хабов в странах БРИКС</p>
                  </div>
                </AnimatedItem>
                
                <AnimatedItem delay={500}>
                  <div className="flex flex-col relative pb-16">
                    <div className="rounded-full w-3 h-3 border border-white mb-6 mx-auto"></div>
                    <span className="text-sm text-neutral-400 uppercase tracking-widest mb-2">2028-2029</span>
                    <h3 className="text-xl font-light uppercase tracking-wide mb-2">Экспансия</h3>
                    <p className="text-sm text-neutral-400">Расширение сети дистрибуции (США, Канада). Укрепление позиций на мировой арене</p>
                  </div>
                </AnimatedItem>
              </div>
            </Card>
          </SlideWrapper>

          {/* Слайд 2 - Гипотеза подтверждена */}
          <SlideWrapper active={currentSlide === 1}>
            <Card className="overflow-hidden bg-black border border-neutral-800 rounded-none shadow-lg p-8 md:p-16">
              <AnimatedItem delay={100}>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16 uppercase">
                  Гипотеза подтверждена:<br />
                  <span className="text-neutral-500">рынок готов платить</span>
                </h2>
              </AnimatedItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <AnimatedItem delay={300}>
                  <div className="relative h-64 md:h-full flex items-center justify-center">
                    <div className="relative">
                      <div className="border border-neutral-700 rounded-full h-40 w-40 absolute" style={{ left: '-40px', top: '-20px' }}></div>
                      <div className="border border-neutral-700 rounded-full h-24 w-24 absolute" style={{ left: '60px', top: '30px' }}></div>
                      <div className="border border-neutral-700 rounded-full h-32 w-32 absolute" style={{ left: '10px', top: '50px' }}></div>
                      <div className="border border-neutral-700 rounded-full h-16 w-16 absolute" style={{ left: '-20px', top: '60px' }}></div>
                      <div className="border border-neutral-700 rounded-full h-20 w-20 absolute" style={{ left: '70px', top: '-10px' }}></div>
                    </div>
                  </div>
                </AnimatedItem>
                
                <div>
                  <AnimatedItem delay={400}>
                    <p className="text-lg text-neutral-300 mb-8">
                      Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
                    </p>
                  </AnimatedItem>
                  
                  <div className="space-y-8">
                    <AnimatedItem delay={500}>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-0.5 bg-white mt-3 flex-shrink-0"></div>
                        <p className="text-neutral-200">подтверждённый product-market fit.</p>
                      </div>
                    </AnimatedItem>
                    
                    <AnimatedItem delay={600}>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-0.5 bg-white mt-3 flex-shrink-0"></div>
                        <p className="text-neutral-200">soft-коммитменты от лабораторий на закупку реагентов</p>
                      </div>
                    </AnimatedItem>
                    
                    <AnimatedItem delay={700}>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-0.5 bg-white mt-3 flex-shrink-0"></div>
                        <p className="text-neutral-200">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
                      </div>
                    </AnimatedItem>
                  </div>
                  
                  <AnimatedItem delay={800}>
                    <p className="mt-10 text-neutral-400 text-sm italic">
                      Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
                    </p>
                  </AnimatedItem>
                </div>
              </div>
            </Card>
          </SlideWrapper>

          {/* Слайд 3 - Рынок микробиомных исследований */}
          <SlideWrapper active={currentSlide === 2}>
            <Card className="overflow-hidden bg-black border border-neutral-800 rounded-none shadow-lg p-8 md:p-16">
              <AnimatedItem delay={100}>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16 uppercase">
                  Рынок микробиомных<br />
                  <span className="text-neutral-500">исследований</span>
                </h2>
              </AnimatedItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative">
                  <AnimatedItem delay={300}>
                    <div className="relative h-72 md:h-80">
                      <div className="border border-neutral-300 rounded-full h-64 w-64 absolute opacity-20" 
                           style={{ left: '20px', top: '10px' }}></div>
                      <div className="border border-neutral-400 rounded-full h-32 w-32 absolute opacity-40" 
                           style={{ right: '20px', top: '40px' }}></div>
                      
                      <div className="absolute top-8 left-8 z-10">
                        <p className="text-2xl font-light">
                          <span className="block text-neutral-500 text-sm mb-1">Глобальный</span>
                          4,5 млрд $
                        </p>
                      </div>
                      
                      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10">
                        <p className="text-xl font-light">
                          <span className="block text-neutral-500 text-sm mb-1">РФ</span>
                          45 млн $
                        </p>
                      </div>
                      
                      <div className="absolute bottom-12 left-8 z-10">
                        <p className="text-xl font-light">
                          <span className="block text-neutral-500 text-sm mb-1">Реагенты</span>
                          1,5 млрд $
                        </p>
                      </div>
                      
                      <div className="absolute bottom-2 left-0 text-xs text-neutral-500">
                        2031г
                      </div>
                      
                      <div className="absolute bottom-2 right-0 text-xs text-neutral-500">
                        CAGR — 25%
                      </div>
                    </div>
                  </AnimatedItem>
                </div>
                
                <div className="flex flex-col justify-center">
                  <AnimatedItem delay={500}>
                    <div className="mb-12 border-l-2 border-white pl-8">
                      <p className="text-xl text-neutral-200">
                        Цель — занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка $150 млн.
                      </p>
                    </div>
                  </AnimatedItem>
                  
                  <AnimatedItem delay={600}>
                    <div className="border-l-2 border-white pl-8">
                      <p className="text-xl text-neutral-200">
                        Прогнозируемая капитализация RND компании — 500+ млн $ 2031 год
                      </p>
                    </div>
                  </AnimatedItem>
                </div>
              </div>
            </Card>
          </SlideWrapper>
          
          {/* Навигация */}
          <div className="mt-10 flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              className="border-neutral-700 hover:bg-neutral-900 rounded-none uppercase text-xs tracking-widest px-8 py-6"
            >
              <ChevronLeft className="h-4 w-4 mr-2" /> Назад
            </Button>
            
            <div className="flex gap-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleNext}
              className="border-neutral-700 hover:bg-neutral-900 rounded-none uppercase text-xs tracking-widest px-8 py-6"
            >
              Далее <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

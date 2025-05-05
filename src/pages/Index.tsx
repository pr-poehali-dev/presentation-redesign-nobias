
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-white">
      <header className="py-4 border-b border-indigo-100">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-indigo-900">Биотех Презентация</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Слайд 1 - Дорожная карта */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentSlide === 0 ? 1 : 0, y: currentSlide === 0 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ display: currentSlide === 0 ? "block" : "none" }}
          >
            <Card className="overflow-hidden bg-white shadow-xl rounded-xl">
              <div className="bg-indigo-900 text-white py-6 px-8">
                <h2 className="text-4xl font-bold tracking-wide">ДОРОЖНАЯ КАРТА</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="bg-indigo-100 rounded-full w-24 h-24 mb-4 flex items-center justify-center mx-auto">
                      <div className="bg-indigo-200 rounded-full w-16 h-16 flex items-center justify-center">
                        <div className="bg-indigo-300 rounded-full w-10 h-10"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-indigo-900">Масштабирование производства</h3>
                      <p className="text-sm text-gray-600 mb-2">Доработка линейки реагентов</p>
                      <div className="bg-indigo-400 text-white py-2 rounded-md">2025</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col relative"
                  >
                    <div className="bg-indigo-100 rounded-full w-24 h-24 mb-4 flex items-center justify-center mx-auto">
                      <div className="bg-indigo-200 rounded-full w-16 h-16 flex items-center justify-center">
                        <div className="bg-indigo-300 rounded-full w-10 h-10"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-indigo-900">Глобализация</h3>
                      <p className="text-sm text-gray-600 mb-2">Создание научных хабов в странах БРИКС</p>
                      <div className="bg-indigo-500 text-white py-2 rounded-md">2027</div>
                    </div>
                    <div className="absolute -bottom-12 left-0 right-0">
                      <div className="bg-indigo-800 text-white py-2 rounded-md">2026</div>
                      <h3 className="text-lg font-bold text-indigo-900 mt-2">Расширение продуктовой линейки</h3>
                      <p className="text-sm text-gray-600">Разработка и патентование рецептур нутрицевтиков</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col relative"
                  >
                    <div className="bg-indigo-100 rounded-full w-24 h-24 mb-4 flex items-center justify-center mx-auto">
                      <div className="bg-indigo-200 rounded-full w-16 h-16 flex items-center justify-center">
                        <div className="bg-indigo-300 rounded-full w-10 h-10"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-indigo-900">Укрепление позиций на мировой арене</h3>
                      <p className="text-sm text-gray-600 mb-2">&nbsp;</p>
                      <div className="bg-indigo-400 text-white py-2 rounded-md">2029</div>
                    </div>
                    <div className="absolute -bottom-12 left-0 right-0">
                      <div className="bg-indigo-800 text-white py-2 rounded-md">2028</div>
                      <h3 className="text-lg font-bold text-indigo-900 mt-2">Расширение сети дистрибуции</h3>
                      <p className="text-sm text-gray-600">Выход на рынки: США, Канада</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Слайд 2 - Гипотеза подтверждена */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentSlide === 1 ? 1 : 0, y: currentSlide === 1 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ display: currentSlide === 1 ? "block" : "none" }}
          >
            <Card className="overflow-hidden bg-white shadow-xl rounded-xl">
              <div className="p-8">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-indigo-900 mb-8"
                >
                  ГИПОТЕЗА ПОДТВЕРЖДЕНА:<br />
                  РЫНОК ГОТОВ ПЛАТИТЬ
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="bg-indigo-100 rounded-full w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="bg-indigo-100 rounded-full w-28 h-28 absolute" style={{ top: "-50px", left: "20px" }}></div>
                      <div className="bg-indigo-100 rounded-full w-28 h-28 absolute" style={{ top: "30px", left: "-60px" }}></div>
                      <div className="bg-indigo-100 rounded-full w-28 h-28 absolute" style={{ top: "100px", left: "0px" }}></div>
                      <div className="bg-indigo-100 rounded-full w-28 h-28 absolute" style={{ top: "30px", left: "100px" }}></div>
                      <div className="relative h-64 w-64"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-lg text-indigo-900 mb-6">
                      Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
                    </p>
                    
                    <ul className="space-y-6">
                      <motion.li 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center"
                      >
                        <div className="bg-indigo-100 rounded-full w-8 h-8 mr-4 flex-shrink-0"></div>
                        <p className="text-indigo-800">подтверждённый product-market fit.</p>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center"
                      >
                        <div className="bg-indigo-100 rounded-full w-8 h-8 mr-4 flex-shrink-0"></div>
                        <p className="text-indigo-800">soft-коммитменты от лабораторий на закупку реагентов</p>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center"
                      >
                        <div className="bg-indigo-100 rounded-full w-8 h-8 mr-4 flex-shrink-0"></div>
                        <p className="text-indigo-800">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
                      </motion.li>
                    </ul>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="mt-6 text-indigo-900"
                    >
                      Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Слайд 3 - Рынок микробиомных исследований */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentSlide === 2 ? 1 : 0, y: currentSlide === 2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ display: currentSlide === 2 ? "block" : "none" }}
          >
            <Card className="overflow-hidden bg-white shadow-xl rounded-xl">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <motion.h2 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold text-indigo-900 mb-10"
                    >
                      РЫНОК МИКРОБИОМНЫХ<br />ИССЛЕДОВАНИЙ
                    </motion.h2>
                    
                    <div className="relative">
                      <div className="bg-pink-100 bg-opacity-60 rounded-full w-64 h-64 absolute transform -translate-x-1/3 -translate-y-1/3 top-1/2 left-1/2"></div>
                      
                      <div className="bg-pink-100 rounded-full w-40 h-40 absolute top-1/2 right-0 flex items-center justify-center text-center">
                        <div>
                          <p className="text-indigo-900 font-bold">РФ - 45 млн $</p>
                        </div>
                      </div>
                      
                      <div className="relative z-10 bg-transparent h-80 p-4">
                        <ul className="space-y-2 ml-4">
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-indigo-900 font-bold"
                          >
                            Глобальный - 4,5 млрд $
                          </motion.li>
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-indigo-900 font-bold"
                          >
                            Реагенты - 1,5 млрд $
                          </motion.li>
                        </ul>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-0 left-0 text-sm text-indigo-900 font-bold"
                      >
                        2031г
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-0 right-0 text-sm text-indigo-900 font-bold"
                      >
                        CAGR- 25%
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col justify-center"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mb-8"
                    >
                      <p className="text-lg text-indigo-900">
                        Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка $150 млн.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="text-lg text-indigo-900">
                        Прогнозируемая капитализация RND компании - 500+ млн $ 2031 год
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Навигация */}
          <div className="mt-10 flex justify-center items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full bg-white shadow-md hover:bg-indigo-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-indigo-900" : "bg-indigo-200"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full bg-white shadow-md hover:bg-indigo-100"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

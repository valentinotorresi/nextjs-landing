import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <>
            <section id="content" className="py-16 md:py-22">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                    <img
                        className="rounded-(--radius) grayscale"
                        src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="team image"
                        height=""
                        width=""
                        loading="lazy"
                    />

                    <div className="mt-30 max-w-5xl px-6">
                        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                            <h2 className="text-4xl font-medium">The <span className='text-primary'>Neon Mind</span> ecosystem brings together our models, products and platforms.</h2>
                            <div className="space-y-6">
                                <p>     Neon Mind is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.</p>
                                <p>
                                    Neon Mind. <span className="font-bold">It supports an entire ecosystem</span> — from products innovate. Sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.
                                </p>
                                <Button
                                    asChild
                                    size="sm"
                                    className="gap-1 pr-1.5">
                                    <Link href="#">
                                        <span>Learn More</span>
                                        <ChevronRight className="size-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

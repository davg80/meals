<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Article;
use App\Entity\Paragraph;
use App\Entity\Traits\Timestampable;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    use Timestampable;
    private UserPasswordHasherInterface $passwordHashed;

    public function __construct(UserPasswordHasherInterface $passwordHashed)
    {
        $this->passwordHashed = $passwordHashed;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($u = 0; $u < 10; $u++) {
            $user = new User();

            $passwordHashed = $this->passwordHashed->hashPassword($user, 'password');

            $user->setEmail($faker->email())
                ->setUsername($faker->word())
                ->setStatus("privé")
                ->setCounterLike(random_int(0, 300))
                ->setCounterFollower(random_int(0, 300))
                ->setCounterSubscriber(random_int(0, 300))
                ->setPassword($passwordHashed);

            $manager->persist($user);

            $article = new Article();

            for ($a = 0; $a < random_int(5, 15); $a++) {
                $article->setAuthor($user)
                    ->setIsPublish($faker->boolean())
                    ->setTitle($faker->sentence(3));
                $manager->persist($article);
            }

            for ($p = 0; $p < 5; $p++) {
                $paragraph = (new Paragraph())->setArticle($article)
                    ->setTitle($faker->sentence(3))
                    ->setContent($faker->text());
                $manager->persist($paragraph);
            }
        }

        $manager->flush();
    }
}
